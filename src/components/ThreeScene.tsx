import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 8;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        // Colors
        const colors = {
            skyBlue: 0x87CEEB,
            lavender: 0xE6E6FA,
            softWhite: 0xF8F9FA,
            gold: 0xFFD700,
            mint: 0x98FF98,
            glow: 0xA855F7, // Purple glow for center
        };

        const shapeColors = [colors.skyBlue, colors.lavender, colors.softWhite, colors.gold, colors.mint];

        const group = new THREE.Group();
        scene.add(group);

        // Center Sphere
        const sphereGeo = new THREE.SphereGeometry(1.5, 32, 32);
        const sphereMat = new THREE.MeshBasicMaterial({ color: 0x1a1a2e, transparent: true, opacity: 0.9 });
        const centerSphere = new THREE.Mesh(sphereGeo, sphereMat);
        group.add(centerSphere);

        const wireframeGeo = new THREE.WireframeGeometry(sphereGeo);
        const wireframeMat = new THREE.LineBasicMaterial({ color: colors.glow, transparent: true, opacity: 0.3 });
        const sphereWireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
        group.add(sphereWireframe);

        // Add glow sprite/pointlight approximation (using a larger soft sphere)
        const glowGeo = new THREE.SphereGeometry(1.8, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({ 
            color: colors.glow, 
            transparent: true, 
            opacity: 0.15,
            blending: THREE.AdditiveBlending 
        });
        const glowSphere = new THREE.Mesh(glowGeo, glowMat);
        group.add(glowSphere);

        // 3 Orbital Rings
        const rings: THREE.Mesh[] = [];
        for (let i = 0; i < 3; i++) {
            const ringGeo = new THREE.TorusGeometry(3 + i * 1.5, 0.02, 16, 100);
            const ringMat = new THREE.MeshBasicMaterial({ 
                color: colors.softWhite, 
                transparent: true, 
                opacity: 0.1 + (0.1 * i),
                wireframe: true
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = Math.random() * Math.PI;
            ring.rotation.y = Math.random() * Math.PI;
            rings.push(ring);
            group.add(ring);
        }

        // 8 Floating Shapes
        const shapes: THREE.Mesh[] = [];
        const shapeGeos = [
            () => new THREE.IcosahedronGeometry(0.5, 0),
            () => new THREE.OctahedronGeometry(0.5, 0),
            () => new THREE.TetrahedronGeometry(0.5, 0),
        ];

        for (let i = 0; i < 8; i++) {
            const geo = shapeGeos[i % 3]();
            const mat = new THREE.MeshBasicMaterial({
                color: shapeColors[i % shapeColors.length],
                wireframe: true,
                transparent: true,
                opacity: 0.6,
            });
            const mesh = new THREE.Mesh(geo, mat);
            
            // Random position outside center sphere
            const radius = 4 + Math.random() * 3;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            
            mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
            mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
            mesh.position.z = radius * Math.cos(phi);
            
            mesh.userData = {
                speedX: (Math.random() - 0.5) * 0.01,
                speedY: (Math.random() - 0.5) * 0.01,
                speedZ: (Math.random() - 0.5) * 0.01,
                orbitSpeed: 0.001 + Math.random() * 0.002,
                orbitAngle: theta,
                orbitRadius: radius,
                orbitY: mesh.position.y
            };
            
            shapes.push(mesh);
            group.add(mesh);
        }

        // Connecting lines from sphere to shapes
        const lineMat = new THREE.LineBasicMaterial({ 
            color: colors.glow, 
            transparent: true, 
            opacity: 0.15 
        });
        const lines: THREE.Line[] = [];
        shapes.forEach(shape => {
            const points = [centerSphere.position, shape.position];
            const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeo, lineMat);
            lines.push(line);
            group.add(line);
        });

        // 120 Ambient Particles
        const particlesGeo = new THREE.BufferGeometry();
        const particlesCount = 120;
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 20;
        }
        
        particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMat = new THREE.PointsMaterial({
            size: 0.05,
            color: colors.softWhite,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particlesMesh);

        // Mouse tracking for parallax
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - window.innerWidth / 2);
            mouseY = (event.clientY - window.innerHeight / 2);
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation Loop
        let animationFrameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            // Parallax mouse effect
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;
            group.rotation.y += 0.05 * (targetX - group.rotation.y);
            group.rotation.x += 0.05 * (targetY - group.rotation.x);
            
            particlesMesh.rotation.y = elapsedTime * 0.02;
            particlesMesh.rotation.x = elapsedTime * 0.01;

            // Center sphere rotation
            centerSphere.rotation.y += 0.005;
            centerSphere.rotation.x += 0.002;
            sphereWireframe.rotation.y += 0.005;
            sphereWireframe.rotation.x += 0.002;

            // Pulse glow sphere
            const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
            glowSphere.scale.set(scale, scale, scale);

            // Ring rotation
            rings[0].rotation.x += 0.002;
            rings[0].rotation.y += 0.001;
            rings[1].rotation.y += 0.003;
            rings[1].rotation.z += 0.002;
            rings[2].rotation.x -= 0.001;
            rings[2].rotation.z += 0.002;

            // Shapes rotation and orbit
            shapes.forEach((shape, index) => {
                shape.rotation.x += shape.userData.speedX;
                shape.rotation.y += shape.userData.speedY;
                shape.rotation.z += shape.userData.speedZ;

                shape.userData.orbitAngle += shape.userData.orbitSpeed;
                shape.position.x = shape.userData.orbitRadius * Math.cos(shape.userData.orbitAngle);
                shape.position.z = shape.userData.orbitRadius * Math.sin(shape.userData.orbitAngle);
                shape.position.y = shape.userData.orbitY + Math.sin(elapsedTime * 2 + index) * 0.5;

                // Update connecting lines
                const positions = lines[index].geometry.attributes.position.array as Float32Array;
                positions[3] = shape.position.x;
                positions[4] = shape.position.y;
                positions[5] = shape.position.z;
                lines[index].geometry.attributes.position.needsUpdate = true;
            });

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            if (!mount) return;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            
            // Clean up Three.js resources
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(mat => mat.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                }
            });
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="absolute inset-0 -z-10"
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
        />
    );
};

export default ThreeScene;
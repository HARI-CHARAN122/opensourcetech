import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, Cpu, BrainCircuit, Briefcase, Palette } from "lucide-react";
import * as THREE from "three";

// Simple unoptimized motion reveal
const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 }
};

const cardReveal = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay }
});

const ParticleNetwork = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const particlesCount = 80; // Keep it reasonable for performance
    const maxDistance = 35;
    
    const particles = new Float32Array(particlesCount * 3);
    const velocities = [];
    
    for (let i = 0; i < particlesCount; i++) {
        particles[i * 3] = (Math.random() - 0.5) * 300;
        particles[i * 3 + 1] = (Math.random() - 0.5) * 300;
        particles[i * 3 + 2] = (Math.random() - 0.5) * 100;
        
        velocities.push({
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.2,
            z: (Math.random() - 0.5) * 0.2,
        });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    
    const material = new THREE.PointsMaterial({
        color: 0xa855f7, // soft purple
        size: 1.5,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
    });
    
    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // Lines mesh (we'll update geometry dynamically)
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x06b6d4, // cyan
        transparent: true,
        opacity: 0.15
    });
    let linesMesh: THREE.LineSegments | null = null;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
        const rect = mount.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / mount.clientWidth) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / mount.clientHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let frameId: number;
    const animate = () => {
        frameId = requestAnimationFrame(animate);
        
        const positions = pointCloud.geometry.attributes.position.array as Float32Array;
        
        // Target rotation based on mouse
        const targetRotX = mouseY * 0.05;
        const targetRotY = mouseX * 0.05;
        
        pointCloud.rotation.x += (targetRotX - pointCloud.rotation.x) * 0.05;
        pointCloud.rotation.y += (targetRotY - pointCloud.rotation.y) * 0.05;
        if(linesMesh) {
            linesMesh.rotation.x = pointCloud.rotation.x;
            linesMesh.rotation.y = pointCloud.rotation.y;
        }

        // Move particles
        for(let i = 0; i < particlesCount; i++) {
            positions[i * 3] += velocities[i].x;
            positions[i * 3 + 1] += velocities[i].y;
            positions[i * 3 + 2] += velocities[i].z;
            
            // Bounds check
            if (positions[i * 3] > 150 || positions[i * 3] < -150) velocities[i].x *= -1;
            if (positions[i * 3 + 1] > 150 || positions[i * 3 + 1] < -150) velocities[i].y *= -1;
            if (positions[i * 3 + 2] > 50 || positions[i * 3 + 2] < -50) velocities[i].z *= -1;
        }
        pointCloud.geometry.attributes.position.needsUpdate = true;

        // Draw connections
        const linePositions = [];
        for (let i = 0; i < particlesCount; i++) {
            for (let j = i + 1; j < particlesCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const distSq = dx*dx + dy*dy + dz*dz;
                
                if (distSq < maxDistance * maxDistance) {
                    linePositions.push(
                        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                }
            }
        }
        
        if (linesMesh) {
            scene.remove(linesMesh);
            linesMesh.geometry.dispose();
        }
        
        if (linePositions.length > 0) {
            const linesGeo = new THREE.BufferGeometry();
            linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            linesMesh = new THREE.LineSegments(linesGeo, lineMaterial);
            scene.add(linesMesh);
        }

        renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
        if (!mount) return;
        camera.aspect = mount.clientWidth / mount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        if(mount.contains(renderer.domElement)) {
            mount.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        if(linesMesh) linesMesh.geometry.dispose();
        lineMaterial.dispose();
        renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen" />;
};

const members = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Building strong foundations before entering the industry.",
    gradient: "from-purple-500 to-pink-500",
    color: "#a855f7",
  },
  {
    icon: Code,
    title: "Developers",
    desc: "Leveling up with real projects and peer collaboration.",
    gradient: "from-pink-500 to-rose-500",
    color: "#ec4899",
  },
  {
    icon: BrainCircuit,
    title: "AI Enthusiasts",
    desc: "Exploring modern AI, data, and machine learning stacks.",
    gradient: "from-cyan-500 to-blue-500",
    color: "#06b6d4",
  },
  {
    icon: Cpu,
    title: "Engineers",
    desc: "Diving deep into systems, cloud, and infrastructure.",
    gradient: "from-emerald-500 to-teal-500",
    color: "#10b981",
  },
  {
    icon: Palette,
    title: "Designers",
    desc: "Blending creativity with technology for better products.",
    gradient: "from-orange-500 to-amber-500",
    color: "#f97316",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "Expanding their network and staying on the cutting edge.",
    gradient: "from-violet-500 to-purple-500",
    color: "#8b5cf6",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-shell relative overflow-hidden py-32">
      <ParticleNetwork />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-pink-600/5 blur-[120px]" />
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-600/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...sectionReveal} className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="section-title mb-6">
            <span className="text-gradient">A Community for Every Builder</span>
          </h2>
          <p className="section-subtitle">
            Whether you're just starting out or already shipping products —
            there's a place for you here.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <motion.div
              key={m.title}
              {...cardReveal(i * 0.07)}
              className="gradient-border card-hover group relative overflow-hidden p-8 backdrop-blur-lg"
              style={{ background: "rgba(10, 10, 15, 0.7)" }}
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at 50% 0%, ${m.color}15, transparent 70%)` }}
              />

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${m.gradient} p-[2px]`}>
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#080810]">
                  <m.icon size={22} style={{ color: m.color }} />
                </div>
              </div>

              <h3 className="mb-3 font-heading text-xl font-bold text-white relative z-10">{m.title}</h3>
              <p className="text-sm leading-relaxed section-subtitle relative z-10 font-medium">{m.desc}</p>

              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${m.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
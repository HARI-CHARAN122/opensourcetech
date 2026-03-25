import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import * as THREE from "three";

const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 }
};

const ThreeCalendarScene = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.z = 6;
        
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(250, 250);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        const group = new THREE.Group();
        scene.add(group);

        // Core Calendar Body (White/Glass)
        const bodyGeo = new THREE.BoxGeometry(2.4, 2.2, 0.4);
        const bodyMat = new THREE.MeshPhysicalMaterial({ 
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.2,
            transparent: true,
            opacity: 0.9,
            transmission: 0.5,
            thickness: 0.5
        });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        group.add(body);

        // Calendar Top Header (Purple/Pink Gradient proxy)
        const headerGeo = new THREE.BoxGeometry(2.4, 0.6, 0.42);
        const headerMat = new THREE.MeshPhysicalMaterial({ 
            color: 0xec4899, 
            metalness: 0.2,
            roughness: 0.3,
            emissive: 0xa855f7,
            emissiveIntensity: 0.4
        });
        const header = new THREE.Mesh(headerGeo, headerMat);
        header.position.y = 0.8;
        group.add(header);

        // Calendar Rings
        const ringGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 16);
        const ringMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8, roughness: 0.2 });
        
        const ring1 = new THREE.Mesh(ringGeo, ringMat);
        ring1.position.set(-0.6, 1.1, 0);
        ring1.rotation.x = Math.PI / 2;
        group.add(ring1);

        const ring2 = new THREE.Mesh(ringGeo, ringMat);
        ring2.position.set(0.6, 1.1, 0);
        ring2.rotation.x = Math.PI / 2;
        group.add(ring2);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xa855f7, 2, 20);
        pointLight1.position.set(3, 3, 4);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x06b6d4, 1.5, 20);
        pointLight2.position.set(-3, -2, 3);
        scene.add(pointLight2);

        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();
            
            // Floating 
            group.position.y = Math.sin(t * 1.5) * 0.15;
            // Rotating slowly
            group.rotation.y = Math.sin(t * 0.5) * 0.2 - 0.2;
            group.rotation.x = Math.cos(t * 0.4) * 0.1 + 0.1;

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            if(mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            bodyGeo.dispose(); bodyMat.dispose();
            headerGeo.dispose(); headerMat.dispose();
            ringGeo.dispose(); ringMat.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-[250px] h-[250px] mx-auto z-10 relative drop-shadow-2xl" />;
};

const EventsSection = () => {
  return (
    <section id="events" className="section-shell relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-600/10 to-indigo-600/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div {...sectionReveal} className="w-full max-w-4xl text-center">
          <div className="gradient-border group relative overflow-hidden p-1 p-px md:p-px mx-auto bg-gradient-to-b from-white/10 to-white/5 rounded-3xl backdrop-blur-xl max-w-2xl">
            <div className="bg-[#050508] rounded-[23px] p-10 md:p-14 relative overflow-hidden flex flex-col items-center">
                
                {/* 3D Scene */}
                <div className="relative mb-8 -mt-6">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                    <ThreeCalendarScene />
                </div>

                <h2 className="section-title mb-6 text-3xl md:text-5xl">
                    Where the <span className="text-gradient">Magic Happens</span>
                </h2>
                <p className="text-slate-300 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    We are currently preparing an incredible lineup of workshops, talks, and hackathons. Huge announcements are launching very soon.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <button className="primary-button w-full sm:w-auto text-base">
                        <Bell size={18} />
                        Get Notified
                    </button>
                    <a href="#activities" className="secondary-button w-full sm:w-auto text-base">
                        <Search size={18} />
                        Explore Activities
                    </a>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
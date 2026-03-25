import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

// Simple unoptimized motion reveal for sections
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

const ShapeCanvas = ({ type, colorHex }: { type: string, colorHex: number }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 4;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Set a fixed small size for the background canvas to keep performance high
    renderer.setSize(200, 200);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    let geo;
    if (type === "icosahedron") geo = new THREE.IcosahedronGeometry(1.5, 0);
    else if (type === "octahedron") geo = new THREE.OctahedronGeometry(1.5, 0);
    else geo = new THREE.TetrahedronGeometry(1.5, 0);

    const mat = new THREE.MeshBasicMaterial({ 
        color: colorHex, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.25 
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    let frameId: number;
    const animate = () => {
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, [type, colorHex]);

  return (
      <div 
        ref={mountRef} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none mix-blend-screen"
        style={{ width: 200, height: 200 }} 
      />
  );
};

const cards = [
  {
    type: "icosahedron",
    colorHex: 0xa855f7, // purple
    title: "Our Mission",
    text: "Enable students and developers to grow with practical learning, real projects, and strong community support.",
    glow: "rgba(168,85,247,0.15)",
  },
  {
    type: "octahedron",
    colorHex: 0x06b6d4, // cyan
    title: "Who It's For",
    text: "Anyone who codes, designs, builds, or wants to — students, developers, and tech enthusiasts of all levels.",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    type: "tetrahedron",
    colorHex: 0xec4899, // pink
    title: "What You Get",
    text: "Workshops, networking, collaborative projects, mentorship, and curated resources for long-term growth.",
    glow: "rgba(236,72,153,0.15)",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-shell relative overflow-hidden py-32">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...sectionReveal} className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="section-title mb-6">
            <span className="text-gradient">Built for the Next Generation of Tech</span>
          </h2>
          <p className="section-subtitle">
            Open Source Tech is more than a community — it's where ambitious developers
            come to learn, build, and connect with people who get it.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {cards.map((item, i) => (
            <motion.div
              key={item.title}
              {...cardReveal(i * 0.15)}
              className="gradient-border card-hover group relative p-8 text-center overflow-hidden h-[320px] flex flex-col items-center justify-center cursor-none"
              style={{ boxShadow: `0 0 60px ${item.glow}` }}
            >
              <ShapeCanvas type={item.type} colorHex={item.colorHex} />
              
              <div className="relative z-10">
                <h3 className="mb-4 font-heading text-2xl font-bold text-white drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed section-subtitle drop-shadow-sm font-medium">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
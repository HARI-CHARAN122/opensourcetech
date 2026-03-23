"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Box() {
    return (
        <mesh rotation={[0.4, 0.2, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#2563eb" />
        </mesh>
    )
}

export default function ThreeScene() {
    return (
        <div style={{ height: "400px", width: "100%" }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <Box />
                <OrbitControls />
            </Canvas>
        </div>
    )
}
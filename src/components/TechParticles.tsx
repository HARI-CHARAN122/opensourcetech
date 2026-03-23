import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { useRef } from "react"
import * as random from "maath/random/dist/maath-random.esm"

function Particles() {
    const ref = useRef<any>()

    const sphere = random.inSphere(new Float32Array(2500), { radius: 1.6 })

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 25
            ref.current.rotation.y -= delta / 30
        }
    })

    return (
        <Points ref={ref} positions={sphere} stride={3}>
            <PointMaterial transparent color="#a855f7" size={0.015} />
        </Points>
    )
}

export default function TechParticles() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <Particles />
            </Canvas>
        </div>
    )
}
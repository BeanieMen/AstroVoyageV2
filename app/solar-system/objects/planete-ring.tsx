import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, DoubleSide } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function PlaneteRing(props: { radius: number, inner: number, outer: number, speed: number, image: string | null }) {
	const meshRef = useRef<Mesh>(null!);
	const imageMap = useLoader(TextureLoader, props.image ?? "")
	var t = 0
	useFrame((state, delta) => {
		meshRef.current!.position.z = props.radius * Math.sin(t * props.speed)
		meshRef.current!.position.x = props.radius * Math.cos(t * props.speed)
		t += 0.01
	})


	return (
		<mesh
			visible
			position={[0, 0, 0]}
			rotation={[Math.PI / 2, 0, 0]}
			castShadow
			ref={meshRef}>
			<ringGeometry args={[props.inner, props.outer, 100]} />

			<meshLambertMaterial attach="material" map={imageMap} side={DoubleSide} />
		</mesh>
	);
}

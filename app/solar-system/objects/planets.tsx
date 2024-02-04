import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Ring from "./ring";

export default function Planet(props: { position: [number, number, number], radius: number, image: string | null, speed: number, size: number }) {
	const imageMap = useLoader(TextureLoader, props.image ?? "")
	const meshRef = useRef<Mesh>(null!);

	var t = 0
	useFrame((state, delta) => {
		meshRef.current!.position.z = props.radius * Math.sin(t*props.speed) 
		meshRef.current!.position.x = props.radius * Math.cos(t*props.speed) 
		t += 0.01
	})

	return (
		<>
			<Ring radius={props.radius} />
			<mesh
				{...props}
				ref={meshRef}>
				<sphereGeometry args={[props.size, 50, 50]} />
				<meshStandardMaterial map={imageMap} />
			</mesh>
		</>
	)
}

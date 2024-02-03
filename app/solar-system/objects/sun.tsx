import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export default function Sun(props: { position: [number, number, number] }) {
	const imageMap = useLoader(TextureLoader, '/imgs/sun.jpg')
	const meshRef = useRef<Mesh>(null!);
    useFrame((state, delta) => {
		meshRef.current!.rotation.y += 0.005
	})
	return (
		<mesh
			{...props}
			ref={meshRef}>
			<sphereGeometry args={[0.5, 50, 50]} />
			<meshStandardMaterial emissive={'red'} emissiveIntensity={2} map={imageMap} />
		</mesh>
	)
}
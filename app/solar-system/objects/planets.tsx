import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Planet(props: { position: [number, number, number], radius: number,  image: string | null}) {	
    const imageMap = useLoader(TextureLoader, props.image ?? "")
	const meshRef = useRef<Mesh>(null!);
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

	var t = 0
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => {
		// meshRef.current!.rotation.x += delta;
		meshRef.current!.position.z = props.radius * Math.sin(t)
		meshRef.current!.position.x = props.radius * Math.cos(t);
		t += 0.01
	})

	return (
		<mesh
			{...props}
			ref={meshRef}>
			<sphereGeometry args={[0.5, 50, 50]} />
			<meshStandardMaterial map={imageMap} />
		</mesh>
	)
}

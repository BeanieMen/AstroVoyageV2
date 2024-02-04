import { useRef } from "react";
import { Mesh, DoubleSide } from "three";

export default function Ring(props: { radius: number }) {
	const ref = useRef<Mesh>(null!);

	return (
		<mesh
			visible
			position={[0, 0, 0]}
			rotation={[Math.PI / 2, 0, 0]}
			castShadow
			ref={ref}>
			<ringGeometry args={[props.radius, props.radius + 0.05, 100]} />
			<meshLambertMaterial attach="material" color="white" side={DoubleSide} />
		</mesh>
	);
}

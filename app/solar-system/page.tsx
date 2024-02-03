'use client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { Mesh } from 'three'

function Box(props: { position: [number, number, number] }) {
	const imageMap = useLoader(TextureLoader, '/imgs/sun.jpg')
	const meshRef = useRef<Mesh>(null!);

	return (
		<mesh
			{...props}
			ref={meshRef}>
			<sphereGeometry args={[0.5, 50, 50]} />
			<meshStandardMaterial map={imageMap} />
		</mesh>
	)
}

function SpinnyBox(props: { position: [number, number, number] }) {
	
	const meshRef = useRef<Mesh>(null!);
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	var t = 0
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => {
		// meshRef.current!.rotation.x += delta;
		meshRef.current!.position.z = 5 * Math.sin(t)
		meshRef.current!.position.x = 5 * Math.cos(t);
		t += 0.01
	})

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}>
			<sphereGeometry args={[0.5, 50, 50]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}

export default function Solar() {
	return (
		<div className='w-screen h-screen bg-black'>
			<Canvas >
				<OrbitControls />
				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<Box position={[-1.2, 0, 0]} />
				<SpinnyBox position={[1.2, 0, 0]} />

			</Canvas>
		</div>
	)
}
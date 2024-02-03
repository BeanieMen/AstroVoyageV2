'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sun from './objects/sun'
import Planet from './objects/planets'
import Ring from './objects/ring'


export default function Solar() {
	return (
		<div className='w-screen h-screen bg-black'>
			<Canvas >
				<OrbitControls />
				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<Sun position={[0, 0, 0]} />
				<Ring/>
				<Planet position={[0,0,0]} radius={5} image={'/imgs/earth.jpg'}/>
			</Canvas>
		</div>
	)
}
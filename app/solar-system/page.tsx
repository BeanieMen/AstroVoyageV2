'use client'
import React, { useEffect } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sun from './objects/sun'
import Planet from './objects/planets'
import Ring from './objects/ring'
import { UnrealBloomPass } from 'three-stdlib'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Navbar from '../components/NavBar'
import { Leva, useControls } from 'leva'

extend({ UnrealBloomPass })

export default function Solar() {
	const intensity = 0.1

	const { bloom } = useControls({
		bloom: false,
	})

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'visible';
		};
	}, []);
	
	return (
		<div className='relative h-screen'>

			<div className='w-screen h-screen bg-black'>

				<Navbar />
				<Canvas >
					{bloom ? (<EffectComposer disableNormalPass>
						<Bloom mipmapBlur={false} luminanceThreshold={0.35} levels={3} intensity={intensity * 4} />
					</EffectComposer>) : (null)}


					<OrbitControls />

					<ambientLight intensity={0.8} />
					<pointLight position={[0, 0, 0]} color={'white'} intensity={350} distance={300} />

					<Sun position={[0, 0, 0]} />
					<Ring />
					<Planet position={[0, 0, 0]} radius={5} image={'/imgs/earth.jpg'} />
				</Canvas>
			</div>

			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
				<Leva fill />
			</div>
		</div>

	)
}
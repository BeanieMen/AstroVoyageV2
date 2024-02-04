'use client'
import React from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sun from './objects/sun'
import Planet from './objects/planets'
import { UnrealBloomPass } from 'three-stdlib'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Navbar from '../components/NavBar'
import { Leva, useControls } from 'leva'
import PlaneteRing from './objects/planete-ring'

extend({ UnrealBloomPass })

export default function Solar() {
	const intensity = 0.1

	const { bloom } = useControls({
		bloom: false,
	})

	return (
		<div className='relative h-screen overflow-hidden select-none'>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
				<Leva fill />
			</div>
			<div className='w-screen h-screen bg-black'>
				<Navbar />
				<Canvas >
					{bloom ? (<EffectComposer disableNormalPass>
						<Bloom mipmapBlur={false} luminanceThreshold={0} levels={2} intensity={intensity * 4} />
					</EffectComposer>) : (null)}


					<OrbitControls />

					<ambientLight intensity={1} />
					<pointLight position={[0, 0, 0]} color={'white'} intensity={500}  />

					<Sun position={[0, 0, 0]} />
					<Planet position={[0, 0, 0]} radius={5} image={'/imgs/mercury.jpg'} speed={1/5} size={0.3}/>
					<Planet position={[0, 0, 0]} radius={7} image={'/imgs/venus.jpg'} speed={0.6/5} size={0.35}/>
					<Planet position={[0, 0, 0]} radius={10} image={'/imgs/earth.jpg'} speed={0.4/5} size={0.5}/>
					<Planet position={[0, 0, 0]} radius={13} image={'/imgs/mars.jpg'} speed={0.3/5} size={0.4}/>
					<Planet position={[0, 0, 0]} radius={20} image={'/imgs/jupiter.jpg'} speed={0.2/5} size={0.7}/>

					<Planet position={[0, 0, 0]} radius={30} image={'/imgs/saturn.jpg'} speed={0.1/5} size={0.8}/>
					<PlaneteRing radius={30} inner={1} image={'/imgs/saturnRing.png'} outer={1.8} speed={0.1/5}></PlaneteRing>

					<Planet position={[0, 0, 0]} radius={37} image={'/imgs/uranus.jpg'} speed={0.1/10} size={0.9}/>
					<Planet position={[0, 0, 0]} radius={45} image={'/imgs/neptune.jpg'} speed={0.1/15} size={0.9}/>

				</Canvas>
			</div>


		</div>

	)
}
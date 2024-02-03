'use client'
import React from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sun from './objects/sun'
import Planet from './objects/planets'
import Ring from './objects/ring'
import { UnrealBloomPass } from 'three-stdlib'
import { ToneMappingMode } from 'postprocessing'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'

extend({UnrealBloomPass})

export default function Solar() {
	const intensity = 0.1

	return (
		<div className='w-screen h-screen bg-black'>
			<Canvas >
			<EffectComposer disableNormalPass>
          <Bloom mipmapBlur luminanceThreshold={0.35} levels={3} intensity={intensity * 4} />
        </EffectComposer>
				<OrbitControls />
				<ambientLight intensity={0.8} />
				<pointLight position={[0, 0, 0]} color={'white'} intensity={350} distance={300} />
				<Sun position={[0, 0, 0]} />
				<Ring/>
				<Planet position={[0,0,0]} radius={5} image={'/imgs/earth.jpg'}/>
			</Canvas>
		</div>
	)
}
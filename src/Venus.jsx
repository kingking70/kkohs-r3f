import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Venus(props) {
  const { nodes, materials } = useGLTF('./GLB0.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tmpuyq04mmhply.geometry}
        material={nodes.tmpuyq04mmhply.material}
      />
    </group>
  )
}

useGLTF.preload('./GLB0.glb')
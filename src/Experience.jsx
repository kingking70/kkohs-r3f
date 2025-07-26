import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls: OrbitControls })

export default function Experience()
{
    const three = useThree()
    const { camera, gl } = useThree()

    const sphereRef = useRef()

    useFrame(() =>
    {
        sphereRef.current.rotation.y += 0.01
    })

    return <>

        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight />
        <ambientLight intensity={ 1.5 } />

        <mesh rotation-y={ Math.PI * 0.25 } position={ [ 2, 0, 0 ] } scale={ 1.5 } ref={sphereRef}>
            <sphereGeometry args={ [ 1.5, 32, 32 ] } />
            <meshBasicMaterial color="mediumpurple" wireframe />
        </mesh>
    </>
}
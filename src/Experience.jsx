import { extend, useFrame, useThree } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import { useRef } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls: OrbitControls })

export default function Experience()
{
    const three = useThree()
    const { camera, gl } = useThree()

    const sphereRef = useRef()
    const [colorMap, roughnessMap, heightMap] = useTexture([
        '/textures/snow_field_aerial_col_4k.jpg',
        '/textures/snow_field_aerial_rough_4k.jpg',
        '/textures/snow_field_aerial_height_4k.png',
    ])

    useFrame((state) =>
    {
        const elapsedTime = state.clock.getElapsedTime()
        const radius = 4
        const angularSpeed = 0.5

        sphereRef.current.position.x = Math.cos(elapsedTime * angularSpeed) * radius
        sphereRef.current.position.z = Math.sin(elapsedTime * angularSpeed) * radius
    })

    return <>

        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight />
        <ambientLight intensity={ 1.5 } />

        <mesh rotation-y={ Math.PI * 0.25 } position={ [ 2, 0, 0 ] } ref={sphereRef}>
            <sphereGeometry args={ [ 1.5, 64, 64 ] } />
            <meshStandardMaterial
                map={colorMap}
                roughnessMap={roughnessMap}
                displacementMap={heightMap}
                displacementScale={0.05}
                metalness={0}
            />
        </mesh>



    </>
}
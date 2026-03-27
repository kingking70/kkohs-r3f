import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Pictures(props)
{
    const cubeRef = useRef();
    const instagramUrl = "https://www.instagram.com/kingskohdk/";

    // Replace these with your own image URLs for each face.
    const imageUrls = useMemo(() => ([
        "./src/assets/insta1.png",
        "./src/assets/insta2.jpeg",
        "./src/assets/insta3.jpeg",
        "./src/assets/insta4.jpeg",
        "./src/assets/insta5.jpeg",
        "./src/assets/insta6.jpeg",
    ]), []);

    const textures = useLoader(THREE.TextureLoader, imageUrls);

    textures.forEach((texture) =>
    {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
    });

    useFrame((state) =>
    {
        const elapsedTime = state.clock.getElapsedTime();

        if (cubeRef.current)
        {
            cubeRef.current.rotation.x = elapsedTime * 0.35;
            cubeRef.current.rotation.y = elapsedTime * 0.55;
        }
    });

    return (
        <mesh
            ref={cubeRef}
            {...props}
            onClick={() => window.open(instagramUrl, "_blank", "noopener,noreferrer")}
        >
            <boxGeometry args={[1.3, 1.3, 1.3]} />
            {textures.map((texture, index) => (
                <meshStandardMaterial key={index} attach={`material-${index}`} map={texture} />
            ))}
        </mesh>
    );
}

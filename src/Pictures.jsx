import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import insta1 from "./assets/insta1.png";
import insta2 from "./assets/insta2.jpeg";
import insta3 from "./assets/insta3.jpeg";
import insta4 from "./assets/insta4.jpeg";
import insta5 from "./assets/insta5.jpeg";
import insta6 from "./assets/insta6.jpeg";

export default function Pictures(props)
{
    const cubeRef = useRef();
    const instagramUrl = "https://www.instagram.com/kingskohdk/";

    // Replace these with your own image URLs for each face.
    const imageUrls = useMemo(() => ([
        insta1,
        insta2,
        insta3,
        insta4,
        insta5,
        insta6,
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

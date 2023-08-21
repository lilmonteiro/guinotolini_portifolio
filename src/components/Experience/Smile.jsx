import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Smile({ px, py, x, y, z, d, ...props }) {
  const { nodes, materials } = useGLTF("/models/smiley/smile-round.gltf");
  const refEyes = useRef();
  const refSmile = useRef();

  useFrame((_, delta) => {
    // ref.current.rotation.x += 0.2 * delta;
    // refEyes.current.rotation.x += 0.5 * delta * d;
    // refSmile.current.rotation.x += 0.5 * delta * d;
    // ref.current.rotation.x += 0.1 * delta * d;
  });

  return (
    <group
      // {...props}
      // dispose={null}
      scale={[0.5, 0.5, 0.4]}
      position={[px, py, 0]}
    >
      <mesh
        geometry={nodes.smile_high002_fora001.geometry}
        material={nodes.smile_high002_fora001.material}
        position={[3.226, -2.292, 0.688]}
        ref={refEyes}
      >
        <meshStandardMaterial attach="material" roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh
        ref={refSmile}
        geometry={nodes.smile_high002_fora.geometry}
        material={nodes.smile_high002_fora.material}
        position={[3.228, -2.29, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial attach="material" roughness={0.1} metalness={0.8} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/smiley/smile-round.gltf");

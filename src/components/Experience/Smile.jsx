import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Smile({ px, py, x, y, z, d, ...props }) {
  const { nodes, materials } = useGLTF("/models/smiley/smile-separate.gltf");
  const [increase, setIncrease] = useState(1);
  const refEyeOne = useRef();
  const refEyeTwo = useRef();
  const refSmile = useRef();
  const refGroup = useRef();
  const groupEyes = useRef();

  useFrame((_, delta) => {
    try {
      // refGroup.current.rotation.z += 0.2 * delta;
      refEyeOne.current.rotation.x += 0.2 * delta;
      refEyeOne.current.rotation.y += -0.2 * delta;

      refEyeTwo.current.rotation.x += -0.2 * delta;
      refEyeTwo.current.rotation.y += 0.2 * delta;

      groupEyes.current.rotation.y += 0.1 * delta;
      refSmile.current.rotation.z += 0.2 * delta;

      refGroup.current.rotation.z += -0.01 * delta;
      refGroup.current.rotation.y += 0.05 * increase * delta;
    } catch (error) {}
  });

  return (
    <group
      // {...props}
      // dispose={null}
      className={"group3d"}
      ref={refGroup}
      scale={0.45}
      position={[-0.8, -1.5, 0]}
      rotation={[0.2, 0.1, 0.1]}
     
      onClick={() => {
        setIncrease(360);
        setTimeout(() => {
          setIncrease(0);
        }, 200);
      }}
    >
      <mesh
        geometry={nodes.smile_high002_fora.geometry}
        material={materials.M1}
        position={[0.079, 1.307, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        ref={refSmile}
      >
        <meshStandardMaterial attach="material" roughness={0.1} metalness={0.9} />
      </mesh>

      <group ref={groupEyes}>
        <mesh
          geometry={nodes.smile_high002_fora001.geometry}
          material={materials.M1}
          position={[2.659, 4.585, 0]}
          ref={refEyeTwo}
        >
          <meshStandardMaterial attach="material" roughness={0.1} metalness={0.9} />
        </mesh>
        <mesh
          geometry={nodes.smile_high002_fora002.geometry}
          material={materials["M1.001"]}
          position={[-2.475, 4.585, 0]}
          ref={refEyeOne}
        >
          <meshStandardMaterial attach="material" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/smiley/smile-separate.gltf");

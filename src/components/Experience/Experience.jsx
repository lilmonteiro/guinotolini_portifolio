import { Environment } from "@react-three/drei";
import { Smile } from "./Smile";
import {} from "@react-three/drei";
import React from "react";

export const Experience = ({ px, py, x, y, z, d}) => {
  return (
    <>
      <ambientLight intensity={2} />
      <Smile d={d} px={px} py={py} x={x} y={y} z={z} />
      <directionalLight position={[0, 0, 1 ]} intensity={2} />
      <Environment files="models/smiley/hdri.hdr" background={false} blur={0} />
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </>
  );
};

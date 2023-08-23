import React, { useState } from "react";
import { Container } from "./style";
import { Canvas } from "react-three-fiber";
import { Experience } from "../Experience/Experience";

const About = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [cPosition, setCPosition] = useState({ x: 0, y: 0 });

  return (
    <Container
      cposition={cPosition}
      id="about"
      onMouseMove={(e) => {
        setCPosition({ x: e.clientX, y: e.clientY });
      }}
    >
      <Canvas
        className="canvas"
        onPointerMove={(e) => {
          document.querySelector(".pointer-circle").classList.add("active");
        }}
        onPointerOut={(e) => {
          document.querySelector(".pointer-circle").classList.remove("active");
        }}
      >
        <Experience px={-2.5} py={0} z={z} d={-1} />
        {/* <Experience px={4} py={0} z={z} d={1} /> */}
      </Canvas>

      <div className="about-column">
        <p className="about-text">
          Tenho 35 anos, sou pai da Lívia e do <br />
          Pedro, marido da Ana. Morando em <br /> São José dos Campos - São Paulo.
        </p>
        <p className="about-text">
          Sou Designer / Diretor de Arte, <br />
          focado na criação de sistemas
          <br /> visuais, identidades de marca <br /> e direção de arte para o digital.
        </p>
        <p className="about-text">
          Já trabalhei para as marcas: Samsung,
          <br /> Intimus/Kotex, Sky, Liberty Seguros, <br />
          Brastemp, Consul, Flash Benefícios,
          <br /> The Body Shop, Plenitud e Huggies.
        </p>
      </div>

      <div className="pointer-circle">
        <p> CLICK ME!</p>
      </div>
    </Container>
  );
};

export default About;

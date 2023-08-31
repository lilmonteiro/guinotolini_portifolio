import React, { useState } from "react";
import { Container } from "./style";
import { Canvas } from "react-three-fiber";
import { Experience } from "../Experience/Experience";

const About = () => {
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
      >
        <Experience px={-2.5} py={0} z={0} d={-1} />
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
          Já trabalhei para as marcas: Consul,
          <br /> Intimus/Kotex, Sky, Liberty Seguros, <br />
          Brastemp, Samsung, Flash Benefícios,
          <br /> The Body Shop, Plenitud e Huggies. <br />
          <a className="about-curriculo" href="/CV_GuilhermeNotolini_2023.pdf" download>
            {" "}
            <span>MEU CURRICULO</span> <span className="material-symbols-outlined">arrow_downward</span>
          </a>
        </p>
      </div>

      {/* <div className="pointer-circle">
        <p> CLICK ME!</p>
      </div> */}
    </Container>
  );
};

export default About;

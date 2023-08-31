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
      <Canvas className="canvas">
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
            <span>Currículo</span>{" "}
            <svg
              id="Camada_1"
              data-name="Camada 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 57"
            >
              <path
                stroke="black"
                fill="black"
                d="M1798,558.51l.09-47h-2l-.09,47a26,26,0,0,0-24-16v2a24,24,0,0,1,24,24h2a24,24,0,0,1,24-24v-2a26,26,0,0,0-24,16"
                transform="translate(-1772.07 -511.5)"
              />
            </svg>
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

import React from "react";
import { Container } from "./style";
import { Canvas } from "react-three-fiber";
import { Experience } from "../Experience/Experience";

const About = () => {
  return (
    <Container id="about">
      {/* <Canvas>
        <Experience />
      </Canvas> */}
      <div className="about-column">
        <p className="about-text">
          Tenho 35 anos, sou pai da Lívia e do <br />Pedro, marido da Ana. Morando em <br /> São José dos
          Campos - São Paulo.
        </p>
        <p className="about-text">
          Sou Designer / Diretor de Arte, <br />focado na criação de sistemas<br /> visuais, identidades de
          marca <br /> e direção de arte para o digital.
        </p>
        <p className="about-text">
          Já trabalhei para as marcas: Samsung,<br /> Intimus/Kotex, Sky, Liberty Seguros, <br />Brastemp, Consul, Flash
          Benefícios,<br /> The Body Shop, Plenitud e Huggies.
        </p>
      </div>
    </Container>
  );
};

export default About;

import React from "react";
import { Container } from "./style";
const About = () => {
  return (
    <Container>
      <div className="cube"></div>
      <div className="about-column">
        <p className="about-text">
          Tenho 35 anos, sou pai da Lívia e do Pedro, marido da Ana. Moro em <br /> São José dos
          Campos - São Paulo.
        </p>
        <p className="about-text">
          Sou Designer / Diretor de Arte, focado na criação de sistemas visuais, identidades de
          marca <br /> e direção de arte para o digital.
        </p>
        <p className="about-text">
          Já trabalhei para as marcas: Intimus/Kotex, Sky, Liberty Seguros, Brastemp, Consul, Flash
          Benefícios, The Body Shop, Plenitud e Huggies.
        </p>
      </div>
    </Container>
  );
};

export default About;

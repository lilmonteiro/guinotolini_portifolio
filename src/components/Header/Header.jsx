import React from "react";
import { Container } from "./style";

const Header = () => {
  return (
    <Container id="inicio">
      <div className="menu-container">
        <div className="menu-vertical">
          <a href="#inicio">INÍCIO </a>
          <a href="#about">EU </a>
          <a href="#trampos">TRAMPOS </a>
          <a href="#contact">CONTATOS</a>
        </div>
      </div>
      <img className="gui-tag" src="/images/guilherme.svg" alt="Guilherme Notolini" />
      <div className="baloons">
        <img id="G" src="/images/G.png" alt="GUI" />
        <img id="U" src="/images/U.png" alt="" />
        <img id="I" src="/images/I.png" alt="" />
        <img className="designer-tag" src="/images/designer.svg" alt="Designer and Art Director" />
      </div>

      <a className="arrow" href="#about">
        <img src="/images/arrow.svg" />
      </a>
    </Container>
  );
};

export default Header;

import React from "react";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <div className="menu-container">
        <div className="menu-vertical">
          <a href="#about">01/EU </a>
          <a href="">02/TRAMPOS </a>
          <a href="#contact">03/CONTATOS</a>
        </div>
      </div>
      <img className="gui-tag" src="/images/guilherme.svg" alt="Guilherme Notolini" />
      <div className="baloons">
        <img src="/images/G.png" alt="GUI" />
        <img src="/images/U.png" alt="" />
        <img src="/images/I.png" alt="" />
      </div>
      <img className="designer-tag" src="/images/designer.svg" alt="Designer and Art Director" />

      <a className="arrow" href="#about">
        <img src="/images/arrow.svg" />
      </a>
    </Container>
  );
};

export default Header;

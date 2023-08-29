import React from "react";
import { Container } from "./style";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <Container id="inicio">
      <Menu />
      {/* <img className="gui-tag" src="/images/guilherme.svg" alt="Guilherme Notolini" /> */}
      <div className="baloons">
        <img id="G" src="/images/G.png" alt="G" />
        <img id="U" src="/images/U.png" alt="U" />
        <img id="I" src="/images/I.png" alt="I" />
        <img className="designer-tag" src="/images/designer.svg" alt="Designer and Art Director" />
      </div>

      <a className="arrow" href="#about">
        <img src="/images/arrow.svg" alt="seta"/>
      </a>
    </Container>
  );
};

export default Header;

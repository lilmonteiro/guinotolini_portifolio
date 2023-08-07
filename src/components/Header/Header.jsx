import React from "react";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <img className="gui-tag" src="/images/guilherme.svg" alt="Guilherme Notolini" />
      <div className="baloons">
        <img src="/images/G.png" alt="GUI" />
        <img src="/images/U.png" alt="" />
        <img src="/images/I.png" alt="" />
      </div>
      <img className="designer-tag" src="/images/designer.svg" alt="Designer and Art Director" />

      <img className="arrow" src="/images/arrow.svg" />
    </Container>
  );
};

export default Header;

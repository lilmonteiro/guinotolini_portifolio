import React from "react";
import { Container } from "./style";

const Contato = () => {
  return (
    <Container id="contact">
      <div className="contact-container row">
        <p>Gui Notolini</p>
      </div>

      <div className="contact-container column">
        <p className="column">
          <span>Designer &</span>
          <span>Art Director</span>
        </p>
        <div>
          <a target="_blank" className="email" href="mailto:guilhermenotolini@gmail.com">
            guilhermenotolini@gmail.com
          </a>
          <a target="_blank" href="tel:+5512988852050" className="spaced-number">
            <span>+55 </span> <span>12 98885 2050</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contato;

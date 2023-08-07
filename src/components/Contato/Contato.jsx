import React from "react";
import { Container } from "./style";

const Contato = () => {
  return (
    <Container id="contact">
      <div className="contact-container">
        <p>Celular - Whatsapp</p>
        <a target="_blank" href="tel:+5512988852050">+55 12 98885 2050</a >
      </div>

      <div className="contact-container">
        <p>Email</p>
        <a target="_blank" href="mailto:guilhermenotolini@gmail.com">guilhermenotolini@gmail.com</a>
      </div>
    </Container>
  );
};

export default Contato;

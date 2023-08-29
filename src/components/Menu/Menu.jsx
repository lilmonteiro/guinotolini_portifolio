import React from "react";
import { Container } from "./style";
import { useNavigate } from "react-router";

const Menu = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  };

  return (
    <Container>
      <a href="#inicio" onClick={(e)=>{handleNavigate("/#inicio")}}>Início </a>
      <a href="#about" onClick={(e)=>{handleNavigate("/#about")}}>Eu </a>
      <a href="#trampos" onClick={(e)=>{handleNavigate("/#trampos")}}>Trampos </a>
      <a href="#contact" onClick={(e)=>{handleNavigate("/#contact")}}>Contatos</a>
    </Container>
  );
};

export default Menu;

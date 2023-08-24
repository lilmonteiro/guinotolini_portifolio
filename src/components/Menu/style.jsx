import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: fit-content;
  width: 100vw;
  padding: 25px 40px;
  z-index: 5;
  display: flex;
  box-sizing: border-box;
  font-weight: 80;
  font-family: "AcidGrotesk";
  justify-content: space-between;
  font-size: 1em;
  z-index: 5;

  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: black;
    cursor: pointer;
    z-index: 5;
  }
  a::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: 0;
    left: 0;
    background-color: rgb(221, 244, 100);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  a:hover {
    color: rgb(221, 244, 100);
    font-weight: 100;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.8em;
  }
`;

export { Container };

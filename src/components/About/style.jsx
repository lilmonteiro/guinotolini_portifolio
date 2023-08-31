import styled from "styled-components";
import colors from "../../utils/colors.json";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 0 4em 0 1em; */
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  position: relative;
  background-color: white;
  /* gap: 80px; */

  .canvas {
    width: 70% !important;
    /* height: 70% !important; */
    overflow: visible !important;
    > * {
      overflow: visible !important;
    }
  }

  .about-column {
    position: absolute;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: fit-content;
    p {
      margin: 0;
    }
  }

  .about-text {
    font-family: "AcidGrotesk";
    font-weight: 40;
    font-size: 2em;
    color: black;
    white-space: nowrap;
  }

  .about-curriculo {
    font-size: 0.5em;
    font-weight: 100;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: fit-content;
    padding: 0 5px;
    box-sizing: border-box;
    gap: 5px;
  }

  .about-curriculo:hover {
    background-color: ${colors["main-green"]};
  }

  .pointer-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #89abb86c;
    width: 100px;
    height: 100px;
    position: absolute;
    transform-origin: -50%;
    left: ${(props) => props.cposition.x + 100}px;
    top: ${(props) => props.cposition.y - 20}px;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    pointer-events: none;
    transition: tranform 0.1s ease-out;
    p {
      display: block;
      text-align: center;
      color: #4f4f4f;
      font-family: "AcidGrotesk";
      font-weight: 100;
      font-size: 0.5em;
    }
  }

  .pointer-circle.active {
    left: ${(props) => props.cposition.x - 5}px;
    top: ${(props) => props.cposition.y - 25}px;
    transform: translate(-50%, -50%) scale(1);
  }

  @media screen and (min-width: 1500px) {
    .about-text {
      font-size: 2.5em;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px;
    height: auto;
    max-height: 100vh;

    .canvas {
      /* display: none; */
      /* background-color: #ff000070; */
      height: 30% !important;
      width: 100% !important;
      transform: translateX(5%) translateY(-5%);
    }

    .about-column {
      gap: 20px;
      right: unset;
      position: relative;
    }

    .about-text {
      font-size: 1.2em;
    }

    .about-curriculo {
      font-size: .8em;
      padding: 0;
    }
    
    .about-curriculo:hover {
      background-color: unset;
    }
  }
`;

export { Container };

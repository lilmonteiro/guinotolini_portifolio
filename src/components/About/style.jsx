import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 0 4em 0 1em; */
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  position: relative;
  /* gap: 80px; */

  .canvas {
    width: 50% !important;
    /* height: 70% !important; */
    overflow: visible !important;
    /* background-color: red; */
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
    font-weight: 60;
    font-size: 2em;
    color: white;
    white-space: nowrap;
  }

  .pointer-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff9f;
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
    p{
      display: block;
      text-align: center;
      color: #4f4f4f;
      font-family: "AcidGrotesk";
      font-weight: 100;
      font-size: .5em;
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
    justify-content: center;
    padding: 20px;
    height: 50vh;

    .canvas {
      display: none;
    }

    .about-column {
      gap: 20px;
      /* width: 100%; */
    }
    .about-text {
      font-size: 1.2em;
    }
  }
`;

export { Container };

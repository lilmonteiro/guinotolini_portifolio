import styled from "styled-components";
// import colors from "../../utils/colors.json";

export const ThumbContainer = styled.div`
  position: relative;
  display: flex;
  padding: 50px 40px;
  flex-direction: column;
  box-sizing: border-box;
  align-items: start;
  justify-content: space-between;
  height: 100vh;
  position: relative;
  background-color: white;
  font-family: "AcidGrotesk";

  .thumb-square {
    width: 50px;
    height: 50px;
    margin: 25px 0;
    background-color: #000;
  }

  .thumb-row-1,
  .thumb-row-2 {
    position: relative;
    display: flex;
    font-size: 3.5em;
    font-weight: 50;
    width: 100%;
    flex-direction: row;

    p {
      margin: 0;
      position: relative;
      z-index: 5;
    }

    p:hover {
      img {
        visibility: visible !important;
      }
    }
  }
  .thumb-row-1 {
    justify-content: space-between;
    text-align: end;
  }

  .thumb-row-2 {
    justify-content: center;
  }
  .thumb-column-2 {
    flex-direction: column;
  }

  .thumb-img {
    position: absolute;
    height: 150px;
    width: auto;
    z-index: -1;
    visibility: hidden;
  }

  #kn2 {
    height: 300px;
    top: -550%;
    right: 0px;
  }

  #maestra {
    height: 250px;
    top: -225%;
    left: 55%;
  }

  #tbs {
    height: 250px;
    top: -225%;
    left: 20%;
  }

  #estadao {
    left: 67%;
    top: -60%;
  }

  #joy {
    height: 250px;
    top: -250%;
    right: 75%;
  }

  @media (max-width: 800px) {
    justify-content: center;
    height: 80vh;
    gap: 20px;
    padding: 0 40px;
    overflow: hidden;

    .thumb-row-1,
    .thumb-row-2 {

    font-size: 2.5em;
      justify-content: start;
      flex-direction: column;
      text-align: start;
      gap: 20px;
    }

    .thumb-column-2 {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .bar{
      display: none;
    }
  }
`;

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;

  .baloons {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    gap: 10px;

    img {
      position: relative;
      height: 40vh;
      max-height: 350px;
      transition: all 0.5s ease;
    }

    #G:hover {
      transform: translateY(-20px) rotate(-10deg) scale(1.1);
    }

    #I:hover {
      transform: translateY(-20px) rotate(10deg) scale(1.3);
    }
    #U:hover {
      transform: translateY(20px) rotate(-10deg) scale(1.2);
    }
  }

  .gui-tag {
    width: 15vw;
    max-width: 250px;
    z-index: 5;
    margin-top: auto;
  }

  .designer-tag {
    position: absolute !important;
    width: 15vw;
    max-width: 250px;
    z-index: 5;
    top: 50%;
    left: 85%;
    bottom: 0;
    right: 0;
    transition: all 0.4s ease;

    :hover {
      transform: rotateZ(10deg);
    }
  }

  .arrow {
    width: 2em;
    margin-top: auto;
    margin-bottom: 20px;
    transition: all 0.4s ease;
    cursor: pointer;

    :hover {
      transform: translateY(-10px);
    }
  }
`;

export { Container };

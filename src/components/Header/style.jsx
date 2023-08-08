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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    margin-left: -100px;

    img {
      height: 40vh;
      transition: all 0.5s ease;
    }

    img:hover {
      transform: translateY(-20px) rotate(-5deg);
    }
  }

  .gui-tag {
    width: 15vw;
    z-index: 5;
    margin-top: auto;
  }

  .designer-tag {
    width: 250px;
    z-index: 5;
    margin-top: -80px;
    margin-right: -45%;
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

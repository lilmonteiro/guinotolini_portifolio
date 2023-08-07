import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4em 0 1em;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .baloons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    img {
      height: 35vh;
      transition: all 0.5s ease;
    }

    img:hover {
      transform: translateY(-20px) rotate(-5deg);
    }
  }

  .gui-tag {
    width: 200px;
    z-index: 5;
    margin-left: 120px;
    margin-top: auto;
  }

  .designer-tag {
    width: 250px;
    z-index: 5;
    margin-top: -100px;
    margin-right: -50%;
    transition: all 0.4s ease;

    :hover {
      transform: rotateZ(10deg);
    }
  }

  .arrow {
    width: 2em;
    margin-top: auto;
    margin-bottom: 20px;
    margin-left: 120px;
    transition: all 0.4s ease;
    cursor: pointer;

    :hover {
      transform: translateY(-10px);
    }
  }
`;

export { Container };

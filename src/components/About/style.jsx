import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 4em 0 1em;
  box-sizing: border-box;
  align-items: center;
  justify-content: end;
  height: 100vh;
  gap: 80px;

  .cube {
    width: 400px;
    height: 400px;
  }

  .about-column {
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
    font-size: 2.2em;
    color: white;
  }

  @media screen and (min-width: 1500px) {
    .about-text {
      font-size: 3.5em;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    height: 50vh;

    .about-column {
      gap: 20px;
      width: 100%;
      
    }
    .about-text {
      font-size: 1.2em;
    }
  }
`;

export { Container };

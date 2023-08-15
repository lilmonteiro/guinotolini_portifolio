import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 3em 4em 0 4em;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;

  .contact-container {
    font-family: "AcidGrotesk";
    font-weight: 50;
    text-align: center;
    font-size: 3em;
    p {
      margin: 0;
    }

    a {
      font-weight: 100;
      color: black;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 800px) {
    .contact-container {
      font-family: "AcidGrotesk";
      font-weight: 50;
      text-align: center;
      font-size: 1.2em;
    }
  }
`;

export { Container };

import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 80px;
  box-sizing: border-box;
  align-items: start;
  justify-content: space-between;
  height: 100vh;

  .contact-container {
    font-family: "AcidGrotesk";
    font-weight: 50;
    font-size: 2.5em;

    p {
      margin: 0;
    }

    a {
      color: black;
      text-decoration: none;
    }

    a:hover {
    }
  }

  .contact-container.row {
    display: flex;
    gap: 350px;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .contact-container.column {
    height: 100%;
    justify-content: space-between;
    align-self: self-end;
  }

  .spaced-number {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    height: 90vh;
    padding: 40px;
    flex-direction: column;
    justify-content: center;

    .contact-container {
      font-size: 1.4em !important;
      font-family: "AcidGrotesk";
      font-weight: 50;
    }

    .contact-container.row{
     margin-top: 25vh;
    }

    .contact-container.column {
      height: 80vh;
      justify-content: space-between;
      align-self: flex-start;
    }

    .spaced-number {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export { Container };

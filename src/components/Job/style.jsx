import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  width: 100%;
  font-family: "AcidGrotesk";

  .job-texts {
    padding: 40px;
    box-sizing: border-box;
  }

  .title {
    font-weight: 80;
    font-size: 2.2em;
    margin: 20px 0 0 0;
  }

  .client {
    font-weight: 200;
    font-size: 1.2em;
    margin: 5px 0 0 0;
  }

  .paragraph {
    margin: 20px 0;
    font-weight: 60;
    font-size: 1.5em;
    width: 50%;
  }

  .job {
    width: 100%;
    margin-top: -5px;
  }
`;

export { Container };

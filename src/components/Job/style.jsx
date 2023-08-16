import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  /* padding: 40px 200px; */
  box-sizing: border-box;
  width: 100%;
  font-family: "AcidGrotesk";

  .job-texts {
    box-sizing: border-box;
    max-width: 1500px;
    display: none; //antiga
  }

  .title {
    font-weight: 80;
    font-size: 2em;
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
    font-size: 1.2em;
  }

  .job {
    width: 100%;
    margin-top: -5px;
  }

  @media screen and (max-width: 800px) {
    .job-texts {
      padding: 20px;
    }
    .title {
      font-size: 1.2em;
    }

    .client {
      font-size: 1em;
    }
    .paragraph {
      font-size: 1em;
      width: 100%;
    }
  }

  @media screen and (min-width: 1500px) {
    /* padding: 40px 400px; */
    .job-texts {
      font-size: 1.2em;
    }
    .title {
      font-size: 2.5em;
    }
  }
`;

export { Container };

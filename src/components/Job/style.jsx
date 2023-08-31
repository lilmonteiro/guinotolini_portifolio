import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  /* padding: 40px 200px; */
  box-sizing: border-box;
  width: 100%;
  font-family: "AcidGrotesk";
  display: flex;

  .job-content {
    box-sizing: border-box;
    max-width: 1500px;
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-weight: 80;
    font-size: 2em;
    margin-bottom: 5px;
    /* margin: 10 0px 0 0 0; */
  }

  .paragraph {
    margin: 20px 0;
    font-weight: 60;
    font-size: 1.2em;
    padding: 30px 0;
    border-bottom: 1px solid #777777;
  }

  .job {
    width: 100%;
  }

  @media screen and (max-width: 800px) {

    .job-content {
      padding: 0px;
    }
    .title {
      margin-top: 50px;
      font-size: 1.2em;
      box-sizing: border-box;
      padding: 20px 20px;
      padding-bottom: 0;
    }
    .client {
      font-size: 1em;
    }
    .paragraph {
      font-size: .9em;
      width: 100%;
      padding: 10px 20px;
      box-sizing: border-box;

      br{
        display: none;
      }
    }
  }

  @media screen and (min-width: 1500px) {
    justify-content: center;
    /* padding: 40px 400px; */
    .job-content {
      font-size: 1.2em;
    }
    .title {
      font-size: 2.5em;
    }
  }
`;

export { Container };

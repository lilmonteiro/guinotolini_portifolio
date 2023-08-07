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

  .cube{
    width: 400px;
    height: 400px;
    background-color: red;
  }

  .about-column{
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: 50%;
    p{
        margin: 0;
    }
  }

  .about-text{
    font-family: 'AcidGrotesk';
    font-weight: 60;
    font-size: 2.2em;
    color: white;
  }
`;

export { Container };

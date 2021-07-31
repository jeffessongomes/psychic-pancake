import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  font-family: Roboto;

  .logoContainer {
    display: flex;
    justify-content: center;

    .code--logo {
      border: 2px solid #feca0b;
      margin-bottom: -20px;
    }
  }

  .container__code--info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #feca0b;
    border-radius: 5px;
    height: 316px;

    p {
      text-align: center;
      padding: 20px 50px;
      color: #383a3c;
      font-weight: 900;
      margin: 0;
    }

    span {
      color: #000000;
      font-size: 40px;
      font-weight: 900;
      letter-spacing: 0.6em;
      margin-right: -0.6em;
    }

    a {
      background: #383a3c;
      color: #feca0b;
      font-family: Roboto;
      font-style: normal;
      font-size: 18px;
      font-weight: 900;
      line-height: 12px;
      border-radius: 5px;

      padding: 27px 27px;

      margin-top: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
    }

    small {
      margin-top: 10px;
      color: #ff0000;
      font-weight: 900;
      font-size: 14px;
      letter-spacing: 8%;
      line-height: 16px;
    }
  }
`;

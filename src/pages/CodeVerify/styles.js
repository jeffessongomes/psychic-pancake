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

    .containerInputCodeVerify{
      div{
        display: flex;
        justify-content: space-between;
        flex: 1;
        width: 100% !important;

        input{
          background: #383a3c;
          color: #feca0b;
          font-weight: bold;
          font-family: Roboto;
          font-size: 24px;

          border-radius: 5px;
          width: 50px !important;
          height: 60px !important;
          margin: 0 2px;
          border: none;
        }
      }
    }

    p {
      text-align: center;
      padding: 20px 50px;
      color: #383a3c;
      font-weight: 900;
      margin: 0;
    }


    button {
      background: #383a3c;
      color: #feca0b;
      font-family: Roboto;
      font-style: normal;
      font-size: 18px;
      font-weight: 900;
      line-height: 12px;
      border-radius: 5px;

      padding: 0;

      margin-top: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;

      width: 200px;
      height: 60px;
    }

    small {
      margin-top: 10px;
      color: #ff0000;
      font-weight: 900;
      font-size: 14px;
      letter-spacing: 8%;
      line-height: 16px;
      height: 15px;
    }
  }
`;

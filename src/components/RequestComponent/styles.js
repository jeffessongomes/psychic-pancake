import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

  .RequestComponent--price {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px 0;

    span {
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      line-height: 19px;
      color: #feca0b;
    }
  }

  .RequestComponent {
    display: flex;

    img {
      width: 93px;
      height: 100%;
      object-fit: cover;
      border-radius: 0 5px 5px 0;
    }

    .RequestComponent--container {
      background: #feca0b;
      border-radius: 5px 0 0 5px;
      width: 100%;
      padding: 10px 0;

      h4 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 17px;
        text-align: center;
        margin: 0;

        color: #383a3c;

        padding: 5px 0;
      }

      .RequestComponent--container__info {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        button {
          background: #383a3c;
          border: none;
          color: #ffffff;
          height: 40px;
          width: 40px;
          border-radius: 5px;
          font-weight: bold;
          font-size: 23px;
          text-align: center;

          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0 5px 0;
        }

        span {
          text-align: center;
          background: #383a3c;
          border: none;
          color: #ffffff;
          height: 40px;
          width: 40px;
          border-radius: 5px;
          font-weight: bold;
          font-size: 17px;
          padding: 0 0 2px 0;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const ContainerOrder = styled.div`
  background: #feca0b;
  border-radius: 5px;
  padding: 30px 0 20px 0;
  margin-bottom: 90px;

  ul {
    margin: 0;

    li {
      &:first-child {
        margin-top: 0;
      }

      border-bottom: 2px solid #383a3c;

      margin-top: 20px;
      list-style: none;

      h5 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 14px;

        text-align: center;

        color: #383a3c;
      }

      .containerPrice {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 0 0 0 20px;

        strong {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 14px;
          text-align: center;

          color: #383a3c;
        }

        .containerInput {
          display: flex;
          flex-direction: row;

          p {
            width: 50px;
            outline: none;
            border: none;
            border-radius: 0;
            background: #383a3c;
            color: #ffffff;
            font-weight: bold;
            text-align: center;
            margin: 0;
          }

          button {
            background: 0;
            border: none;
            font-size: 26px;
            padding: 0 20px;

            &.containerInput--btn__menos {
              font-size: 32px;
            }
          }
        }
      }
    }
  }

  .containerRequest__btn{
    position: fixed;
    bottom: 0;

    width: 100%;
    background: #383a3c;
    padding: 7px 0;

    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      
    .request__btn {
      background: #FECA0B;

      border: none;

      flex: 1;
      color: #383A3C;
      font-size: 22px;
      text-transform: uppercase;
      font-weight: bold;
      padding: 10px 0;
      text-align: center;
      text-decoration: none;
    }

    .request__btn--order{
      margin-left: 2px;
      border-radius: 5px 0 0 5px;
    }

    .request__btn--back{
      margin-right: 2px;
      border-radius: 0 5px 5px 0;
    }

    .messageError {
      font-weight: bold;
      color: #e74c3c;
    }
  }
`;

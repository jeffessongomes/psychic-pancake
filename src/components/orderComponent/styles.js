import styled from "styled-components";

export const ContainerOrder = styled.div`
  background: #FECA0B;
  border-radius: 5px;
  padding: 30px 0 20px 0;
  margin-bottom: 20px;

  ul{
    margin: 0;

    li{
      &:first-child{
        margin-top: 0;
      }

      border-bottom: 2px solid #383A3C;

      margin-top: 20px;
      list-style: none;

      h5{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 14px;

        text-align: center;

        color: #383A3C;
      }

      .containerPrice{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 0 0 0 20px;

        strong{
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 14px;
          text-align: center;

          color: #383A3C;
        }

        .containerInput{
          display: flex;
          flex-direction: row;

          input{
            width: 50px;
            outline: none;
            border: none;
            border-radius: 0;
            background: #383A3C;
            color: #FFFFFF;
            font-weight: bold;
            text-align: center;
          }

          button{
            background: 0;
            border: none;
            font-size: 26px;
            padding: 0 20px;

            &.containerInput--btn__menos{
              font-size: 32px;
            }
          }
        }
      }
    }
  }

  .request--btn{
    background: #383A3C;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #FECA0B;
    text-transform: uppercase;
    outline: none;
    border: none;

    padding: 0px;
    width: 70%;
    border-radius: 5px;
    margin-top: 26px;

    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

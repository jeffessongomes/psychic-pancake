import styled from "styled-components";

export const Container = styled.div`
  margin: 0px !important;
  padding: 0px !important;

  h2 {
    color: #feca0b;
    font-size: 22px;
    font-family: "Roboto";
    font-weight: 900;

    text-align: center;

    margin-top: 100px;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .container__insta {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-left: -15px;
    margin-top: 40px;
    height: 160px;
    width: 100vw;
    background-color: #000000;
  }

  h3 {
    color: #feca0b;
    font-size: 26px;
    font-family: "Roboto";
    font-weight: 900;

    text-align: center;

    margin-top: 15px;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .container__button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
  }

  a {
    background: #feca0b;
    color: #383a3c;
    font-family: Roboto;
    font-style: normal;
    font-size: 22px;
    font-weight: 900;
    line-height: 12px;
    border-radius: 5px;

    padding: 27px 27px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
  }
`;

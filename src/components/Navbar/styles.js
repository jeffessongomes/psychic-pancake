import styled from "styled-components";

export const ContainerComponent = styled.div`
  background: #feca0b;

  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  li {
    display: flex;
    justify-content: center;

    padding: 15px 0;

    a {
      z-index: 98;

      background: #383a3c;
      color: #feca0b;
      font-family: Roboto;
      font-style: normal;
      font-size: 14px;
      font-weight: 900;
      line-height: 12px;
      border-radius: 5px;

      padding: 11px 15px;

      text-decoration: none;

      @media only screen and (max-width: 380px) {
        font-size: 12px;
      }
    }
  }
`;

export const ButtonHome = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  top: 10px;
  position: absolute;

  margin-left: -19px;

  z-index: 20;

  a{
    z-index: 98;

    img {
      border: 2px solid #feca0b;
      height: 90px;
    }
  }
`;

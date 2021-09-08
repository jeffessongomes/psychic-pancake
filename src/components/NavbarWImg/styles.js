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

    a,
    button {
      border: none;
      background: #383a3c;
      color: #feca0b;
      font-family: Roboto;
      font-style: normal;
      font-size: 14px;
      font-weight: 900;
      line-height: 12px;
      border-radius: 5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      padding: 11px 15px;

      text-decoration: none;

      @media only screen and (max-width: 380px) {
        font-size: 12px;
      }
    }
  }
`;

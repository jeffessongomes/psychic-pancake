import styled from 'styled-components';

export const ContainerComponent = styled.div`
  background: #FECA0B;

  position: relative;
`;


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;


  li{
    display: flex;
    justify-content: center;

    padding: 15px 0;

    a{
      background: #383A3C;
      color: #FECA0B;
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

    img{
      top: 10px;
      position: absolute;
      border: 2px solid #FECA0B;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  .bannerStart {
    background: #feca0b;
    margin-top: 100px;

    display: flex;
    justify-content: center;

    p {
      padding: 21px 80px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      font-size: 26px;
      line-height: 30px;
      text-align: center;

      margin: 0;

      color: #383a3c;
    }
  }
`;

export const ContainerHome = styled.div`
  padding: 0 20px;

  .Home--option {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  .container--bannerStart {
    height: 80px;

    &.isFixedBanner {
      height: 150px;
    }

    .bannerStart {
      background: #feca0b;

      display: flex;
      justify-content: center;

      margin-top: 80px;
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

    .bannerFixed {
      margin-top: 0;
      top: 0;
      position: fixed;
      width: 100%;
      border-bottom: 5px solid #383a3c;
    }
  }
`;

export const ContainerOrder = styled.div`
  padding: 0 20px;

  margin-top: 26px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

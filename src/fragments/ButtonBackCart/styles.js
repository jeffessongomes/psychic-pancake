import styled from "styled-components";

export const ContainerButton = styled.div`
  position: fixed;
  top: 60px;
  right: 5px;
  background-color: #feca0b;
  z-index: 10;

  border-radius: 50%;
  height: 65px;
  width: 65px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  span {
    font-family: Roboto;
    font-size: 20px;
    color: #df0a0a;
    font-weight: bolder;
    position: absolute;
    top: 2px;
    left: 25px;
  }

  img {
    width: 46px;
    height: 41px;
    margin-top: 10px;
  }
`;

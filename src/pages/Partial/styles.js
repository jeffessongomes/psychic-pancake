import styled from "styled-components";

export const Container = styled.div`
  margin-top: 70px;

  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .partial__buttonBack{
    position: fixed;
    bottom: 20px;
    width: 150px !important;

    a{
      padding: 20px 0;
    }
  }

  .navOptionOrders{
    ul{
      display: flex;
      justify-content: center;

      li{
        list-style: none;
        margin: 0;

        button{
          background-color: #383A3C;
          border: none;
          box-shadow: 0px 2px 15px rgba(0,0,0,0.3);
          padding: 5px 20px;
          color: #feca0b;
          font-weight: bold;

          &.navOptionOrders__buttonLeft{
            border-radius: 5px 0 0 5px;
          }

          &.navOptionOrders__buttonRight{
            border-radius: 0 5px 5px 0;
          }

          &.navOptionOrders--active{
            background-color: #feca0b;
            color: #383A3C;
          }
        }
      }
    }
  }

  table {
    width: 100%;
    border-collapse: separate;
    tr.headerTable,
    tr.footerTable {
      background: #000;

      td {
        text-align: center;
        padding: 14px 0px;

        font-size: 14px;
        font-weight: bold;

        .footerTable__price {
          background: #feca0b;
          color: #000;
          border-radius: 5px;
          padding: 8px 12px;
          font-size: 14px;
        }
      }
    }

    tr.bodyTable__lineTwo {
      background-color: #696969;
    }

    tr {
      background-color: #8e8e8e;
      td {
        margin: 0;
        border: none;
        text-align: center;
        padding: 14px 4px;

        font-size: 14px;
        font-weight: bold;

        .bodyTable__price {
          background: #feca0b;
          color: #000;
          border-radius: 5px;
          padding: 8px 12px;
          font-size: 12px;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  margin-top: 70px;

  padding: 0 20px;

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

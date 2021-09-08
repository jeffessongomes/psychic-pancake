import { Container } from "./styles";

function Partial() {
  return (
    <Container>
      <table>
        <tr className="headerTable">
          <td>Produto</td>
          <td>Quantidade</td>
          <td>Preço</td>
        </tr>
        <tr>
          <td>Suco de maracujá</td>
          <td>2 x 19,00</td>
          <td>
            <span className="bodyTable__price">R$ 38,00</span>
          </td>
        </tr>
        <tr className="bodyTable__lineTwo">
          <td>Suco de maracujá</td>
          <td>2 x 19,00</td>
          <td>
            <span className="bodyTable__price">R$ 38,00</span>
          </td>
        </tr>
        <tr className="footerTable">
          <td colspan="2">Total</td>
          <td>
            <span className="footerTable__price">R$ 114,00</span>
          </td>
        </tr>
      </table>
    </Container>
  );
}

export default Partial;

import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles";

function Partial() {
  const location = useLocation();
  const [Loading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [,, numberTable] = location.pathname.split("/");


  useEffect(() => {
    api.get(`filtro_pedido/${numberTable}`).then((response) => {
      setOrders(response.data);
      setIsLoading(false);
    });
  }, [numberTable]);

  if(Loading){
    return(
      <div>
        Carregando...
      </div>
    )  
  }

  return (
    <Container>
      <table>
        <tr className="headerTable">
          <td>Produto</td>
          <td>Quantidade</td>
          <td>Preço</td>
        </tr>
        {orders?.pedidos?.map((item) => { 
          let totalPrice = item.qtd * item.preco_unid;

          if(item.concluido === false){
            return null;
          }

          return(
          <tr className="bodyTable__lineTwo">
            <td>{item.nome_produto}</td>
            <td>{item.qtd} x {item.preco_unid.toFixed(2).replace(".", ",")}
            </td>
            <td>
              <span className="bodyTable__price">{totalPrice?.toFixed(2).replace(".", ",")}</span>
            </td>
          </tr>
        )})}
        <tr className="footerTable">
          <td colspan="1">Total</td>
          <td colspan="2">
            <span className="footerTable__price">R$ {orders?.total_pedido?.toFixed(2).replace(".", ",")}</span>
          </td>
        </tr>
      </table>
    </Container>
  );

}

export default Partial;

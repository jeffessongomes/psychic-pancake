import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { Nav, ContainerComponent } from "./styles";

import { Link, useLocation, Redirect } from "react-router-dom";
import { removeAllProductToOrder } from "../../store/modules/order/actions";

const NavbarWImg = () => {
  const [isOrderSend, setIsOrderSend] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const Order = useSelector((state) => state.order.items);

  const [, slug, numberTable] = location.pathname.split("/");

  function handleConfirmOrder() {
    Order.forEach(async (item) => {
      try {
        if (item.quantity > 0) {
          await api.post("/pedido/", {
            qtd: item.quantity,
            cancelado: false,
            concluido: false,
            is_table: true,
            mesa: parseInt(numberTable),
            produto: item.id,
          });

          dispatch(removeAllProductToOrder());
          setIsOrderSend(true);
        }
      } catch (e) {
        console.error(e);
      }
    });
  }

  if (isOrderSend) {
    return <Redirect to={`/${slug}/${numberTable}/pedido/compartilhar`} />;
  }

  return (
    <ContainerComponent>
      <Container>
        <Row>
          <Col lg={12}>
            <Nav>
              <li>
                <Link to={`/${slug}/${numberTable}/menu`}>PEDIR MAIS</Link>
              </li>
              <li>
                <button onClick={() => handleConfirmOrder()}>CONFIRMAR</button>
              </li>
            </Nav>
          </Col>
        </Row>
      </Container>
    </ContainerComponent>
  );
};

export default NavbarWImg;

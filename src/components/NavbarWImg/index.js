import { useState } from "react";

import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";
import { Nav, ContainerComponent } from "./styles";

import { Link, useLocation, Redirect } from "react-router-dom";
import { removeAllProductToOrder } from "../../store/modules/order/actions";

const NavbarWImg = () => {
  const [isOrderSend, setIsOrderSend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const Order = useSelector((state) => state.order.items);
  const dataTable = useSelector((state) => state.data.data);

  const [, slug, numberTable] = location.pathname.split("/");

  function handleConfirmOrder() {
    setIsLoading(true);
    Order.forEach(async (item, index) => {
      try {
        if (item.quantity > 0) {
          await api.post("/pedido/", {
            qtd: item.quantity,
            cancelado: false,
            concluido: false,
            is_table: true,
            token: dataTable.token,
            mesa: dataTable.id,
            produto: item.id,
          });

          dispatch(removeAllProductToOrder());
          setIsOrderSend(true);

          if(Order.length === index+1 ){
            setIsLoading(false);
          }
        }
      } catch (e) {
        setIsLoading(false);
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
                <button onClick={() => handleConfirmOrder()}>
                  {
                    isLoading ?
                      <Spinner animation="border" size="sm"  />
                    :
                    <>
                      CONFIRMAR
                    </>
                  }
                </button>
              </li>
            </Nav>
          </Col>
        </Row>
      </Container>
    </ContainerComponent>
  );
};

export default NavbarWImg;

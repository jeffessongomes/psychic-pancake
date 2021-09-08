import { Container, Row, Col } from "react-bootstrap";

import RequestComponent from "../../components/RequestComponent";
import NavbarWImg from "../../components/NavbarWImg";

import { useSelector } from "react-redux";

import { Container as ContainerHome } from "./styles";

function ConfirmOrder() {
  const Requests = useSelector((state) => state.order.items);

  return (
    <ContainerHome>
      <NavbarWImg />
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Antes de clicar em confirmar, dá uma conferida aí!</h2>
          </Col>
        </Row>
        <Row className="pb-4">
          {Requests.map((Request) => (
            <Col lg={12} className="mt-3" key={Request.id}>
              <RequestComponent item={Request} />
            </Col>
          ))}
        </Row>
      </Container>
    </ContainerHome>
  );
}

export default ConfirmOrder;

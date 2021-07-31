import { Container, Row, Col } from "react-bootstrap";

import RequestComponent from "../../components/RequestComponent";
import NavbarWImg from "../../components/NavbarWImg";

import { Container as ContainerHome } from "./styles";

function ConfirmOrder() {
  return (
    <ContainerHome>
      <NavbarWImg />
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Confira o seu pedido</h2>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col lg={12} className="mt-3">
            <RequestComponent />
          </Col>
          <Col lg={12} className="mt-3">
            <RequestComponent />
          </Col>
          <Col lg={12} className="mt-3">
            <RequestComponent />
          </Col>
          <Col lg={12} className="mt-3">
            <RequestComponent />
          </Col>
          <Col lg={12} className="mt-3">
            <RequestComponent />
          </Col>
          <Col lg={12} className="mt-3">
            <RequestComponent />
          </Col>
          <Col lg={12} className="mt-3">
            <RequestComponent />
          </Col>
        </Row>
      </Container>
    </ContainerHome>
  );
}

export default ConfirmOrder;

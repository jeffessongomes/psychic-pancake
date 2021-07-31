import { Container, Row, Col } from "react-bootstrap";

import { Nav, ContainerComponent } from "./styles";

import { Link } from "react-router-dom";

const NavbarWImg = () => (
  <ContainerComponent>
    <Container>
      <Row>
        <Col lg={12}>
          <Nav>
            <li>
              <Link to="/">PEDIR MAIS</Link>
            </li>
            <li>
              <Link to="/">CONFIRMAR</Link>
            </li>
          </Nav>
        </Col>
      </Row>
    </Container>
  </ContainerComponent>
);

export default NavbarWImg;

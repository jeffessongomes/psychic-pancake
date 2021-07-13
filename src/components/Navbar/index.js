import { Container, Row, Col } from "react-bootstrap";

import { Nav, ContainerComponent } from "./styles";

import { Link } from "react-router-dom";

import LogoTipo from "../../assets/img/logo.png";

const Navbar = () => (
  <ContainerComponent>
    <Container>
      <Row>
        <Col lg={12}>
          <Nav>
            <li>
              <Link to="/">Meus Pedidos</Link>
            </li>
            <li>
              <img src={LogoTipo} alt="Logo da empresa" />
            </li>
            <li>
              <Link to="/">Chamar Garçom</Link>
            </li>
          </Nav>
        </Col>
      </Row>
    </Container>
  </ContainerComponent>
);

export default Navbar;

import { Container, Row, Col } from "react-bootstrap";

import { Nav, ContainerComponent } from "./styles";

import { Link, useLocation } from "react-router-dom";

import LogoTipo from "../../assets/img/logo.png";

const Navbar = () => {
  const location = useLocation();

  if (
    location.pathname === "/pedido/confirmar" ||
    location.pathname === "/verificar-codigo"
  ) {
    return null;
  }
  return (
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
};

export default Navbar;

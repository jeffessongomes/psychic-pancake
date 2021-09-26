import { Container, Row, Col } from "react-bootstrap";

import { Nav, ContainerComponent, ButtonHome } from "./styles";

import { Link, useLocation } from "react-router-dom";

import LogoTipo from "../../assets/img/logoBruno.jpg";

const Navbar = () => {
  const location = useLocation();
  const [, slug, numberTable] = location.pathname.split("/");

  if (
    location.pathname === `/${slug}/${numberTable}/pedido/confirmar` ||
    location.pathname === `/${slug}/${numberTable}/pedido/confirmar/` ||
    location.pathname === `/${slug}/${numberTable}/` ||
    location.pathname === `/${slug}/${numberTable}`
  ) {
    return null;
  }
  return (
    <>
      <ContainerComponent>
        <Container>
          <Row>
            <Col lg={12}>
              <Nav>
                <li>
                  <Link to={`/${slug}/${numberTable}/parcial`}>Meus Pedidos</Link>
                </li>
                <ButtonHome>
                  <Link to={`/${slug}/${numberTable}/menu`}>
                    <img src={LogoTipo} alt="Logo da empresa" />
                  </Link>
                </ButtonHome>
                <li>
                  <Link to="/">Chamar Garçom</Link>
                </li>
              </Nav>
            </Col>
          </Row>
        </Container>
      </ContainerComponent>
    </>
  );
};

export default Navbar;

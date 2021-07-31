import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

import { Container as ContainerCode } from "./styles";

const CodeVerify = () => {
  return (
    <ContainerCode>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="logoContainer">
              <img className="code--logo" src={Logo} alt="Logo do bar" />
            </div>
            <div className="container__code--info">
              <p>
                INFORME AO GARÇOM O CÓDIGO NA SUA TELA.
                <br />
                NÃO COMPARTILHA, BLZ?
              </p>
              <span> 77777</span>
              <Link to="/">BOM APETITE!</Link>
              <small>Aguardando validação</small>
            </div>
          </Col>
        </Row>
      </Container>
    </ContainerCode>
  );
};

export default CodeVerify;

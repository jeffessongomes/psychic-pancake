import { Container, Row, Col } from "react-bootstrap";

import { FaInstagram } from "react-icons/fa";

import { IoIosArrowBack } from "react-icons/io";

import { Link, useParams } from "react-router-dom";

import { Container as ContainerHome } from "./styles";

function ShareOrder() {
  const { slug, numberTable } = useParams();

  return (
    <ContainerHome>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <h2>
              Enquanto trazemos seu pedido, que tal compartilhar com a galera!?
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="container__insta">
              <FaInstagram size={50} color="#feca0b" />
              <h3>@botecodobrunoof</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="container__button">
              <Link to={`/${slug}/${numberTable}/menu`}>
                <IoIosArrowBack size={24} color="#383A3C" />
                VOLTAR AO MENU
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </ContainerHome>
  );
}

export default ShareOrder;

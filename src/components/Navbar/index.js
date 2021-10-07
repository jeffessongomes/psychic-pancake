import { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import api from "../../services/api";

import LogoTipo from "../../assets/img/logoBruno.jpg";
import { Nav, ContainerComponent, ButtonHome } from "./styles";

const Navbar = () => {
  const [isCallWaiter, setIsCallWaiter] = useState(false);
  const [isButtonCallWaiter, setIsButtonCallWaiter] = useState(true);
  const location = useLocation();
  const [, slug, numberTable] = location.pathname.split("/");
  const idTable = useSelector((state) => state.data?.data?.id);

  useEffect(() => {
    api.get(`mesa_chamar/${idTable}/`).then((response) => {
      if(response.data.chamado){
        setIsCallWaiter(true);
      }
    })

    if(
      location.pathname === `/${slug}/${numberTable}/pedido/compartilhar`
    ){
      setIsButtonCallWaiter(false);
    }else{
      setIsButtonCallWaiter(true);
    }
  }, [idTable, slug, numberTable, location])

  if (
    location.pathname === `/${slug}/${numberTable}/pedido/confirmar` ||
    location.pathname === `/${slug}/${numberTable}/pedido/confirmar/` ||
    location.pathname === `/${slug}/${numberTable}/` ||
    location.pathname === `/${slug}/${numberTable}`
  ) {
    return null;
  }
  
  async function handleCallWaiter(){
    try{
      await api.put(`mesa_chamar/${idTable}/`, {
        chamado: true,
      });

      setIsCallWaiter(true);
    }catch(err){
      console.log(err);
    }
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
                {isButtonCallWaiter && (
                  <li>
                    <button onClick={handleCallWaiter} className="callWaiter--button" type="button">
                      { isCallWaiter ? <>Garçom Chamado</> : <>Chamar Garçom</> }
                    </button>
                  </li>
                )}
              </Nav>
            </Col>
          </Row>
        </Container>
      </ContainerComponent>
    </>
  );
};

export default Navbar;

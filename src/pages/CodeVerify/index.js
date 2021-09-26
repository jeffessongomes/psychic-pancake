import { useState } from "react";

import { Container, Row, Col, Spinner } from "react-bootstrap";

import ReactCodeInput from 'react-verification-code-input';

import { useParams, Redirect } from "react-router-dom";

import { useDispatch} from "react-redux";

import { addDataToTable } from "../../store/modules/table/actions";
import { removeAllProductToOrder } from "../../store/modules/order/actions";

import api from "../../services/api";

import Logo from "../../assets/img/logoBruno.jpg";

import { Container as ContainerCode } from "./styles";

const CodeVerify = () => {
  const [ code, setCode ] = useState("");
  const [isCodeError, setIsCodeError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const { slug, numberTable } = useParams();
  const dispatch = useDispatch();


  
  async function handleVerifyCode(){
    setIsLoading(true);

    try{
      const {data} = await api.post("/verificar_codigo/", {
        codigo: code,
        mesa: parseInt(numberTable),
        slug: slug
      });
      setIsCodeError(false);
      setIsLoading(false);


      dispatch(addDataToTable({
        token: data.token,
        id: data.mesa
      }));

      dispatch(removeAllProductToOrder());

      setIsLogged(true);

    }catch(err){
      console.log(err);
      setIsCodeError(true);
      setIsLoading(false);
    }
  }


  return (
    <>
      {
        isLogged && (
          <Redirect to={`/${slug}/${numberTable}/menu`} />
        )
      }
      <ContainerCode>
        <Container fluid>
          <Row>
            <Col lg={12}>
              <div className="logoContainer">
                <img className="code--logo" src={Logo} alt="Logo do bar" />
              </div>
              <div className="container__code--info">
                <p>
                  CHAME O GARÇOM E PEÇA PARA ELE DIGITAR O CÓDIGO DE VALIDAÇÃO.
                </p>
                <div className="containerInputCodeVerify">
                  <ReactCodeInput onComplete={e => setCode(e)} fields={5} />
                </div>
                <button onClick={handleVerifyCode} type="button">
                  { 
                    isLoading
                    ?
                      <Spinner animation="border" size="sm"  />
                    :
                    <>BOM APETITE! </>
                  }
                </button>
                <small>
                  {isCodeError &&
                    <>
                      Código invalido!
                    </>
                  }
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </ContainerCode>
    </>
  );
};

export default CodeVerify;

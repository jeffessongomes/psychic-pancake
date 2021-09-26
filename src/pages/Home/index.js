import { useEffect, useState } from "react";

import Button from "../../fragments/Button";

import api from "../../services/api";

import { ContainerHome, Container } from "./styles";

function Home() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    api.get('tipo').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Container>
      <div className="bannerStart">
        <p>Bem-vindo ao Boteco do Bruno!</p>
      </div>
      <ContainerHome>
        <div className="Home--option">
          {data.map((type) => (
            <Button key={type.id} Title={type.nome} path={`pedido/categoria/${type.slug}/${type.id}`} />
          ))}
        </div>
      </ContainerHome>
    </Container>
  );
}

export default Home;

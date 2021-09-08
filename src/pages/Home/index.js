import Button from "../../fragments/Button";

import { ContainerHome, Container } from "./styles";

function Home() {
  return (
    <Container>
      <div className="bannerStart">
        <p>Bem-vindo ao Boteco do Bruno!</p>
      </div>
      <ContainerHome>
        <div className="Home--option">
          <Button Title="Petiscos" path="pedido/categoria/6" />
          <Button Title="Cervejas" path="pedido/categoria/2" />
          <Button Title="Caldos" path="pedido/categoria/3" />
          <Button Title="Drinks" path="pedido/categoria/4" />
          <Button Title="Cachaças" path="pedido/categoria/5" />
        </div>
      </ContainerHome>
    </Container>
  );
}

export default Home;

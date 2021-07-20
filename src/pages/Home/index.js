import Button from '../../fragments/Button';

import { ContainerHome, Container } from './styles';

function Home(){
  return(
    <Container>
    <div className="bannerStart">
      <p>
        Bem-vindo ao
        Boteco do Bruno!
      </p>
    </div>
      <ContainerHome>
        <div className="Home--option">
          <Button Title="Bebidas" path="/pedido" />
          <Button Title="Sucos e refrigerantes" path="/" />
          <Button Title="Petiscos" path="/" />
        </div>
      </ContainerHome>
    </Container>
  )
}

export default Home;

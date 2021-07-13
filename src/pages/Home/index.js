import Navbar from '../../components/Navbar';

import Button from '../../fragments/Button';

import { ContainerHome } from './styles';

function Home(){
  return(
    <ContainerHome>
      <Navbar />

      <div className="bannerStart">
        <p>
          Bem-vindo ao
          Boteco do Bruno!
        </p>
      </div>
      <div className="Home--option">
        <Button Title="Bebidas" path="/" />
        <Button Title="Sucos e refrigerantes" path="/" />
        <Button Title="Petiscos" path="/" />
      </div>
    </ContainerHome>
  )
}

export default Home;

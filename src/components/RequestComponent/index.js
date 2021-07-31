import NoPhotos from "../../assets/img/sem-foto.jpg";

import { Container } from "./styles";

const RequestComponent = () => (
  <Container>
    <div className="RequestComponent">
      <div className="RequestComponent--container">
        <h4>Mousse de maracujá</h4>
        <div className="RequestComponent--container__info">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
      <img src={NoPhotos} alt="Sem foto da comida" />
    </div>
    <div className="RequestComponent--price">
      <span>R$ 99,99</span>
    </div>
  </Container>
);

export default RequestComponent;

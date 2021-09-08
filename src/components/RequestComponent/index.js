import { useDispatch } from "react-redux";
import LogoBruno from "../../assets/img/logoBruno.jpg";
import {
  addProductToOrderAfterConfirm,
  removeProductToOrder,
} from "../../store/modules/order/actions";

import { Container } from "./styles";

const RequestComponent = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="RequestComponent">
        <div className="RequestComponent--container">
          <h4>{item.nome}</h4>
          <div className="RequestComponent--container__info">
            <button onClick={() => dispatch(removeProductToOrder([item]))}>
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(addProductToOrderAfterConfirm([item]))}
            >
              +
            </button>
          </div>
        </div>
        <img src={LogoBruno} alt="Sem foto da comida" />
      </div>
      <div className="RequestComponent--price">
        <span>R$ {item.preco.toFixed(2).replace(".", ",")}</span>
      </div>
    </Container>
  );
};

export default RequestComponent;

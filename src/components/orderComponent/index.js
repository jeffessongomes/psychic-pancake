import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { addProductToOrder } from "../../store/modules/order/actions";
import api from "../../services/api";

import { ContainerOrder } from "./styles";
import { Redirect, useParams } from "react-router-dom";

const OrderComponent = ({ id }) => {
  const [data, setData] = useState([]);
  const [isOrderSend, setIsOrderSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const { slug, numberTable } = useParams();

  const handleAddProductToOrder = () => {
    let orderFinish = [];

    data.forEach((item) => {
      if (item.quantity > 0) {
        orderFinish.push(item);
      }
    });

    if (orderFinish.length > 0) {
      dispatch(addProductToOrder(orderFinish));
      setIsError(false);
      setIsOrderSend(true);
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    api.get(`filtro_tipo/${id}`).then((response) => {
      let arrayItems = [];
      response.data.produtos.forEach((item) => {
        arrayItems.push({
          ...item,
          quantity: 0,
        });
      });
      setData(arrayItems);
    });
  }, [id]);

  const handleAddProductToOrderTemporary = (product) => {
    const productInOrderTemporaryIndex = data.findIndex(
      (item) => item.id === product.id
    );

    let alterData = data;

    alterData[productInOrderTemporaryIndex].quantity++;

    setData([...alterData]);
  };

  const handleRemoveProductToOrderTemporary = (product) => {
    const productInOrderTemporaryIndex = data.findIndex(
      (item) => item.id === product.id
    );

    let alterData = data;

    if (alterData[productInOrderTemporaryIndex].quantity > 0) {
      alterData[productInOrderTemporaryIndex].quantity--;
    }
    setData([...alterData]);
  };

  const handleAlterProductToOrderTemporary = (e, product) => {
    const productInOrderTemporaryIndex = data.findIndex(
      (item) => item.id === product.id
    );

    let alterData = data;
    alterData[productInOrderTemporaryIndex].quantity = e.target.value;

    setData([...alterData]);
  };

  if (isOrderSend) {
    return <Redirect to={`/${slug}/${numberTable}/pedido/confirmar`} />;
  }

  return (
    <ContainerOrder>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h5>{item.nome}</h5>
            <div className="containerPrice">
              <strong>R$ {item.preco.toFixed(2).replace(".", ",")}</strong>
              <div className="containerInput">
                <button
                  className="containerInput--btn__menos"
                  type="button"
                  onClick={() => handleRemoveProductToOrderTemporary(item)}
                >
                  -
                </button>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) => handleAlterProductToOrderTemporary(e, item)}
                />
                <button
                  type="button"
                  onClick={() => handleAddProductToOrderTemporary(item)}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="request--btn"
        onClick={() => handleAddProductToOrder()}
      >
        Pedir
      </button>
      {isError && <p className="messageError">Nenhum item adicionado</p>}
    </ContainerOrder>
  );
};

export default OrderComponent;

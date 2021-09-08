import { useSelector } from "react-redux";

import { useLocation, Link } from "react-router-dom";

import BackCart from "../../assets/img/back_cart.svg";

import { ContainerButton } from "./styles";

const ButtonBackCart = () => {
  const location = useLocation();
  const [, slug, numberTable] = location.pathname.split("/");
  const Orders = useSelector((state) => state.order.items);

  if (
    location.pathname === `/${slug}/${numberTable}/pedido/confirmar` ||
    location.pathname === `/${slug}/${numberTable}/pedido/confirmar/` ||
    Orders.length === 0
  ) {
    return null;
  }

  return (
    <ContainerButton className="mt-4">
      <Link to={`/${slug}/${numberTable}/pedido/confirmar`}>
        <span>{Orders.length}</span>
        <img src={BackCart} alt="Imagem de icone de voltar ao carrinho" />
      </Link>
    </ContainerButton>
  );
};

export default ButtonBackCart;

import { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";

import api from "../../services/api";

import { ContainerOrder, Container } from "./styles";

import OrderComponent from "../../components/orderComponent";

function Order() {
  const [data, setData] = useState({});
  const [isFixed, setIsFixed] = useState(false);
  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`filtro_tipo/${params.id}`).then((response) => {
      setData(response.data);
    });
  }, [params]);

  console.log(data);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 135) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <div className={`container--bannerStart ${isFixed && "isFixedBanner"}`}>
        <div className={`bannerStart ${isFixed && "bannerFixed"} `}>
          <p>Bebidas</p>
        </div>
      </div>
      <ContainerOrder>
        <OrderComponent />
      </ContainerOrder>
    </Container>
  );
}

export default Order;

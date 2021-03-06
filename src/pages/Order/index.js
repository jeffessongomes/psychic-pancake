import { useEffect, useState } from "react";

import { useRouteMatch } from "react-router-dom";

import { ContainerOrder, Container } from "./styles";

import OrderComponent from "../../components/orderComponent";

function Order() {
  const [type, setType] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const { params } = useRouteMatch();

  useEffect(() => {
    switch (params.id) {
      case "1":
        setType("Caldos");
        break;
      case "2":
        setType("Drinks");
        break;
      case "3":
        setType("Cachaças");
        break;
      case "4":
        setType("Petiscos");
        break;
      case "5":
        setType("Cervejas");
        break;
      case "6":
        setType("Bebidas sem álcool");
        break;
      default:
        setType("NADA FOI ENCONTRADO!");
    }
  }, [params]);

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
          <p>{type}</p>
        </div>
      </div>
      <ContainerOrder>
        <OrderComponent id={params.typeSlug} />
      </ContainerOrder>
    </Container>
  );
}

export default Order;

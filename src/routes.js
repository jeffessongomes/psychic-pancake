import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";
import ConfirmOrder from "./pages/ConfirmOrder";
import Navbar from "./components/Navbar";
import ShareOrder from "./pages/ShareOrder";
import CodeVerify from "./pages/CodeVerify";
import Partial from "./pages/Partial";

import ButtonBackCart from "./fragments/ButtonBackCart";
import api from "./services/api";
import { removeDataToTable } from "./store/modules/table/actions";

export default function Routes() {
  const [authLogin, setAuthLogin] = useState(false);

  const token = useSelector((state) => state.data?.data?.token);
  const dispatch = useDispatch();

  const location = useLocation();

  const [, slug, numberTable] = location.pathname.split("/");

  useEffect(() => {
    api
      .post("verificar_token/", {
        token: token || "noToken",
      })
      .then((response) => {
        if (token !== undefined) {
          if (response.data.estado) {
            setAuthLogin(true);
          } else {
            dispatch(removeDataToTable());
          }
        }
      });
  }, [location.pathname, token, dispatch]);

  return (
    <>
      {authLogin && (
        <>
          <Navbar />
          <ButtonBackCart />
        </>
      )}

      <Switch>
        {authLogin ? (
          <>
            {token ? <Redirect to={`/${slug}/${numberTable}/menu`} /> : null}
            <>
              <Route
                exact
                path="/:slug/:numberTable/parcial"
                component={Partial}
              />
              <Route exact path="/:slug/:numberTable/menu" component={Home} />
              <Route
                exact
                path="/:slug/:numberTable/pedido/categoria/:typeSlug/:id"
                component={Order}
              />
              <Route
                exact
                path="/:slug/:numberTable/pedido/confirmar"
                component={ConfirmOrder}
              />
              <Route
                exact
                path="/:slug/:numberTable/pedido/compartilhar"
                component={ShareOrder}
              />
              <Route exact path="/:slug/:numberTable" component={CodeVerify} />
            </>
          </>
        ) : (
          <>
            <Route exact path="/:slug/:numberTable" component={CodeVerify} />
          </>
        )}
      </Switch>
    </>
  );
}

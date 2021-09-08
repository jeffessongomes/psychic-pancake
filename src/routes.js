import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";
import ConfirmOrder from "./pages/ConfirmOrder";
import Navbar from "./components/Navbar";
import ShareOrder from "./pages/ShareOrder";
import CodeVerify from "./pages/CodeVerify";
import Partial from "./pages/Partial";

import ButtonBackCart from "./fragments/ButtonBackCart";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <ButtonBackCart />

      <Switch>
        <Route exact path="/:slug/:numberTable" component={CodeVerify} />
        <Route exact path="/:slug/:numberTable/parcial" component={Partial} />
        <Route exact path="/:slug/:numberTable/menu" component={Home} />
        <Route
          exact
          path="/:slug/:numberTable/pedido/categoria/:id"
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
      </Switch>
    </Router>
  );
}

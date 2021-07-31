import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";
import ConfirmOrder from "./pages/ConfirmOrder";
import Navbar from "./components/Navbar";
import ShareOrder from "./pages/ShareOrder";
import CodeVerify from "./pages/CodeVerify";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pedido/:id" component={Order} />
        <Route exact path="/pedido/confirmar" component={ConfirmOrder} />
        <Route exact path="/pedido/compartilhar" component={ShareOrder} />
        <Route exact path="/verificar-codigo" component={CodeVerify} />
      </Switch>
    </Router>
  );
}

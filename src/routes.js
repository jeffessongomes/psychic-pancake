import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Order from './pages/Order';
import ConfirmOrder from './pages/ConfirmOrder';
import Navbar from './components/Navbar';

export default function Routes() {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pedido" component={Order} />
        <Route exact path="/pedido/confirmar" component={ConfirmOrder} />
      </Switch>
    </Router>
  )
}

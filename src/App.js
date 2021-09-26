import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from "react-redux";

import { BrowserRouter as Router} from "react-router-dom";

import Routes from "./routes";

import { persistor, store } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

import { combineReducers } from "redux";

import order from "./order/reducer";
import data from "./table/reducer";

export default combineReducers({
  order,
  data
});

const { combineReducers } = require("redux");
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  login: authReducer,
});
export default rootReducer;

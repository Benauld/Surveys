import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";
import productsReducer from "./productsReducer";
import clientsReducer from "./clientsReducer";
import errorReducer from "./errorReducer";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  surveys: surveysReducer,
  products: productsReducer,
  clients: clientsReducer,
  errors: errorReducer,
  form: reduxForm,
});

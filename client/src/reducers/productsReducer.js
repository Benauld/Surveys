import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case FETCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}

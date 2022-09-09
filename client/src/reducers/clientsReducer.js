import { FETCH_CLIENTS, FETCH_CLIENT } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CLIENTS:
      return action.payload;
    case FETCH_CLIENT:
      return action.payload;
    default:
      return state;
  }
}

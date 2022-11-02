import {
  FETCH_CLIENTS,
  FETCH_CLIENT,
  CREATE_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT,
} from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CLIENTS:
      return action.payload;
    case FETCH_CLIENT:
      return action.payload;
    case CREATE_CLIENT:
      return action.payload;
    case EDIT_CLIENT:
      return action.payload;
    case DELETE_CLIENT:
      return action.payload;
    default:
      return state;
  }
}

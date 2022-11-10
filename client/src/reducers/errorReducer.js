import { LOG_ERROR, CLEAR_ERROR } from "../actions/types";

export default function (state = "", action) {
  switch (action.type) {
    case LOG_ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return (state = "");
    default:
      return state;
  }
}

import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_CLIENTS,
  FETCH_CLIENT,
} from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const res = await axios.get(`/api/products/${id}`);
  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

export const fetchClients = () => async (dispatch) => {
  const res = await axios.get("/api/clients");
  dispatch({ type: FETCH_CLIENTS, payload: res.data });
};

export const fetchClient = (id) => async (dispatch) => {
  const res = await axios.get(`/api/clients/${id}`);
  dispatch({ type: FETCH_CLIENT, payload: res.data });
};

import useSWR from "swr";
import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  CHECK_SESSION,
  DELETE_CATEGORY,
  DELETE_PRODUCT,
  EDIT_CATEGORY,
  EDIT_PRODUCT,
  FETCH_ALL_CATEGORIES,
  FETCH_ALL_PRODUCTS,
  FETCH_SINGLE_PRODUCT,
  LOGGED_IN_ADMIN,
  LOGIN_ADMIN,
} from "../constants/routes";
import { fetcher, sesionFetcher } from "./fetcher";
import { mutationRequest } from "./sender";

// Auth
export const loginAmin = async (values) => {
  const result = await mutationRequest(LOGIN_ADMIN, "post", values);
  return result;
};
export const checkSession = () => {
  const { data, error, loading, mutate } = useSWR(CHECK_SESSION, sesionFetcher);
  return { data, error, loading, mutate };
};

export const fetchLoggedInAdmin = () => {
  const { data, error, loading, mutate } = useSWR(LOGGED_IN_ADMIN, fetcher);
  return { data, error, loading, mutate };
};

export const addNewProduct = async (values) => {
  const result = await mutationRequest(ADD_PRODUCT, "post", values);
  return result;
};
export const updateProduct = async (id, values) => {
  const result = await mutationRequest(`${EDIT_PRODUCT}/${id}`, "put", values);
  return result;
};
export const fetchAllProducts = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_PRODUCTS, fetcher);
  return { data, error, loading, mutate };
};
export const fetchSingleProduct = (id) => {
  const { data, error, loading, mutate } = useSWR(
    `${FETCH_SINGLE_PRODUCT}/${id}`,
    fetcher
  );
  return { data, error, loading, mutate };
};
export const deleteProduct = async (id) => {
  const result = await mutationRequest(`${DELETE_PRODUCT}/${id}`, "delete");
  return result;
};

export const addNewCategory = async (values) => {
  const result = await mutationRequest(ADD_CATEGORY, "post", values);
  return result;
};
export const updateCategory = async (id, values) => {
  const result = await mutationRequest(
    `${EDIT_CATEGORY}/${id}`,
    "post",
    values
  );
  return result;
};
export const fetchAllCategories = () => {
  const { data, error, loading, mutate } = useSWR(
    FETCH_ALL_CATEGORIES,
    fetcher
  );
  return { data, error, loading, mutate };
};
export const deleteCategory = async (id) => {
  const result = await mutationRequest(`${DELETE_CATEGORY}/${id}`, "delete");
  return result;
};

import useSWR from "swr";
import { ADD_NEW_PRODUCT, FETCH_ALL_PRODUCTS } from "../constants/routes";
import { fetcher } from "./fetcher";
import { mutationRequest } from "./sender";

// Auth
export const addNewProduct = async (values) => {
  const result = await mutationRequest(ADD_NEW_PRODUCT, "post", values);
  return result;
};

export const fetchAllProducts = () => {
  const { data, error, loading, mutate } = useSWR(FETCH_ALL_PRODUCTS, fetcher);
  return { data, error, loading, mutate };
};

export const fetchSingleProduct = (id) => {
  const { data, error, loading, mutate } = useSWR(
    `${FETCH_ALL_PRODUCTS}/${id}`,
    fetcher
  );
  return { data, error, loading, mutate };
};

import { axiosInstance } from "./client";
import Cookies from "js-cookie";

export const fetcher = ({ url, withCredentials = true }) =>
  axiosInstance
    .get(url, { withCredentials })
    .then((res) => {
      console.log("res", res);
      if (res.status === 401) {
        Cookies.remove("u-x");
        window.location.href = "/login";
      }
      return res.data;
    })
    .catch((err) => {
      console.log("fetch error", err);
      if (err.response.status === 401) {
        Cookies.remove("u-x");
        window.location.href = "/login";
      }
      throw Error(err);
    });

export const sesionFetcher = (url) =>
  axiosInstance
    .get(url, { withCredentials })
    .then((res) => {
      console.log("res", res);
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        Cookies.remove("u-x");
        return false;
      }
    })
    .catch((err) => {
      console.log("fetch error", err);
      if (err.response.status === 401) {
        Cookies.remove("u-x");
        return false;
      }
      throw Error(err);
    });

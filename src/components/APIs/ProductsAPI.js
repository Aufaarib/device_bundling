import axios from "axios";
import { ErrorHandlings } from "./shared/ErrorHandlings";

export const getAllProducts = (setData, setMeta, setIsLoading) => {
  axios
    .get(process.env.REACT_APP_API_KEY + `/product/all-product`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
      setIsLoading(false);
    })
    .catch((err) => {
      ErrorHandlings(err);
      setIsLoading(false);
    });
};

export const getProductById = (setData, id, setIsLoading) => {
  axios
    .get(process.env.REACT_APP_API_KEY + `/product/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setIsLoading(false);
    })
    .catch((err) => {
      ErrorHandlings(err);
      setIsLoading(false);
    });
};

export const getProductByBrand = (setData, setMeta, brandId, setIsLoading) => {
  axios
    .get(process.env.REACT_APP_API_KEY + `/product/brand/${brandId}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
      setIsLoading(false);
    })
    .catch((err) => {
      ErrorHandlings(err);
      setIsLoading(false);
    });
};

export const getAllBrands = (setData, setIsLoading, page) => {
  axios
    .get(process.env.REACT_APP_API_KEY + `/brand/all-brand?page=${page}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setIsLoading(false);
    })
    .catch((err) => {
      ErrorHandlings(err);
      setIsLoading(false);
    });
};

const API_URL = import.meta.env.VITE_APP_API_ENDPOINT_BASE;
const CREATE_PRODUCT = `${API_URL}/products`;
const UPDATE_PRODUCT = `${API_URL}/products`;
const DELETE_PRODUCT = `${API_URL}/products`;

// Category
const CREATE_CATEGORY = `${API_URL}/categories`;
const UPDATE_CATEGORY = `${API_URL}/categories`;
const DELETE_CATEGORY = `${API_URL}/categories`;

// StockCount
const CREATE_STOCKCOUNT = `${API_URL}/stockcount`;
const UPDATE_STOCKCOUNT = `${API_URL}/stockcount`;
const DELETE_STOCKCOUNT = `${API_URL}/stockcount`;

// Adjustment list
const CREATE_ADJUSTMENT = `${API_URL}/adjustment`;
const UPDATE_ADJUSTMENT = `${API_URL}/adjustment`;
const DELETE_ADJUSTMENT = `${API_URL}/adjustment`;

export {
  API_URL,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CREATE_STOCKCOUNT,
  UPDATE_STOCKCOUNT,
  DELETE_STOCKCOUNT,
  CREATE_ADJUSTMENT,
  UPDATE_ADJUSTMENT,
  DELETE_ADJUSTMENT,
};

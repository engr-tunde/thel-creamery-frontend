import * as yup from "yup";

export const validateAddReturnSale = () => {
  return yup.object({
    saleReference: yup
      .string()
      .required("Sale reference is required"),
  });
};

export const validateAddReturnPurchase = () => {
  return yup.object({
    purchaseReference: yup
      .string()
      .required("Purchase reference is required"),
  });
};

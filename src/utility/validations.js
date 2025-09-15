import * as yup from "yup";

export const validateAddProduct = () => {
  const validationSchema = yup.object({
    productName: yup.string().required("Product name is missing"),
    productCode: yup.string().required("Product code is missing"),
    barcodeSymbology: yup
      .string()
      .required("barcode symbology is not provided"),
    brand: yup.string().required("Brand name is missing"),
    category: yup.string().required("Product category is missing"),
    productUnit: yup.string().required("How many unit does the product have?"),
    saleUnit: yup.string().required("Sale unit is missing"),
    productCost: yup.string().required("What is the product cost?"),
    profitMargin: yup.string().required("Product profit margin is missing"),
    productPrice: yup.string().required("Product price is missing"),
    wholesalePrice: yup.string().required("Product wholesale price is missing"),
    dailySaleObjective: yup
      .string()
      .required("Product dailySaleObjective is missing"),
    alertQuantity: yup.string().required("Product alertQuantity is missing"),
    productTax: yup.string().required("Product tax is missing"),
    taxMethod: yup.string().required("Product taxMethod is missing"),
    warrantyPeriod: yup.string().required("Product warrantyPeriod is missing"),
    warrantyUnit: yup.string().required("Product warrantyUnit is missing"),
    guaranteePeriod: yup
      .string()
      .required("Product guaranteePeriod is missing"),
    guaranteeUnit: yup.string().required("Product guaranteeUnit is missing"),
    purchaseUnit: yup.string().required("Product purchaseUnit is missing"),
    featured: yup.string().required("Product featured is missing"),
    embeddedBarcode: yup
      .string()
      .required("Product embeddedBarcode is missing"),
    initialStock: yup.string().required("Product initialStock is missing"),
  });

  return validationSchema;
};

export const validateStockCount = () => {
  const validationSchema = yup.object({
    warehouse: yup.string().required("Warehouse name is missing"),
    category: yup.string().required("Category is missing"),
    brand: yup
      .string()
      .required("Brand is not provided"),
  });

  return validationSchema;
};

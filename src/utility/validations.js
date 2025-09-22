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
    productDetails: yup.string().required("Product details is missing"),
  });

  return validationSchema;
};

export const validateAddPurchase = () => {
  const validationSchema = yup.object({
    purchaseStatus: yup.string().required("Purchae status is missing"),
    referenceNumber: yup.string().required("Reference number is missing"),
    date: yup.string().required(" the date is missing"),
    supplier: yup.string().required("suppliers name must be provided"),
    AttachDocument: yup.string().required("attached the neccessary document"),
    currency: yup.string().required("select currency"),
    exchangeRate: yup.string().required("select exchange rate"),
    selectProduct: yup.string().required("specify the selected product"),
    orderTax: yup.string().required("Provide the order tax"),
    discount: yup.string().required("discount prices is misssing"),
    shippingCost: yup.string().required("shipping cost is missing"),
    paymentStatue: yup.string().required("Payment status is missing"),
    note: yup.string().required("Add short note"),
  });

  return validationSchema;
};

export const validateStockCount = () => {
  const validationSchema = yup.object({
    warehouse: yup.string().required("Warehouse name is missing"),
    category: yup.string().required("Category is missing"),
    brand: yup.string().required("Brand is not provided"),
  });

  return validationSchema;
};
export const validateAdjustment = () => {
  const validationSchema = yup.object({
    warehouse: yup.string().required("Warehouse name is missing"),
    selectProduct: yup.string().required("Product is not provided"),
    productDetails: yup.string().required("Product details is not provided"),
  });

  return validationSchema;
};

export const validateAccounting = () => {
  const validationSchema = yup.object({
    accountName: yup.string().required("account name is missing"),
    name: yup.string().required("Name is not provided"),
    initialValue: yup.string().required("Initial Value is not provided"),
    note: yup.string().required("Note is not provided"),
  });

  return validationSchema;
};

export const validateTransfer = () => {
  const validationSchema = yup.object({
    fromAccount: yup.string().required("account name is missing"),
    toAccount: yup.string().required("Name is not provided"),
    amount: yup.string().required("Initial Value is not provided"),
  });

  return validationSchema;
};

export const validateStatement = () => {
  const validationSchema = yup.object({
    account: yup.string().required("account name is missing"),
    type: yup.string().required("Name is not provided"),
    chooseDate: yup.string().required("Initial Value is not provided"),
  });

  return validationSchema;
};

export const ValidateAddAdjustment = () => {
  const validationSchema = yup.object({
    warehouse: yup.string().required("warehouse name is missing"),
    attachDocument: yup.string().required("attach the needed file"),
    selectProduct: yup.string().required("select product"),
  });

  return validationSchema;
};
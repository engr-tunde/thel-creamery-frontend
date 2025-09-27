import * as yup from "yup";

export const validateLogin = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email provided")
      .required("Email is missing"),
    password: yup.string().required("Password is missing"),
  });
  return validationSchema;
};
export const validateAddCategory = () => {
  const validationSchema = yup.object({
    category: yup.string().required("Category name is missing"),
  });
  return validationSchema;
};

export const validateAddProduct = () => {
  const validationSchema = yup.object({
    product_type: yup.string().required("Select product type"),
    product_name: yup.string().required("Product name is missing"),
    product_code: yup.string().required("Product code is missing"),
    barcode_format: yup.string().required("barcode symbology is not provided"),
    brand: yup.string().required("Brand name is missing"),
    category: yup.string().required("Product category is missing"),
    unit: yup.string().required("How many unit does the product have?"),
    purchase_unit: yup.string().required("Purchse unit is missing"),
    sale_unit: yup.string().required("Sale unit is missing"),
    quantity: yup.number().required("Available quantity is missing"),
    product_cost: yup.number().required("What is the product cost?"),
    profit_margin: yup.number(),
    product_price: yup.number().required("Product price is missing"),
    wholesale_price: yup
      .number()
      .required("Product wholesale price is missing"),
    daily_sale_objective: yup.string(),
    alert_quantity: yup.number().required("Product alert quantity is missing"),
    product_tax: yup.string(),
    tax_method: yup.string(),
    warranty: yup.number(),
    guarantee: yup.number(),
    image: yup.mixed().required("Please upload an image"),
    product_details: yup.string().required("Product details is missing"),
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

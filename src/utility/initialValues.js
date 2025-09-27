export const loginAdminValues = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return initialValues;
};

export const addCategoryValues = (data) => {
  const initialValues = {
    category: data ? data.category : "",
    parent_category: data ? data.parent_category : "",
  };
  return initialValues;
};

export const addProductValues = (data) => {
  const initialValues = {
    product_type: data ? data.product_type : "",
    product_name: data ? data.product_name : "",
    product_code: data ? data.product_code : "",
    barcode_format: data ? data.barcode_format : "",
    brand: data ? data.brand : "",
    category: data ? data.category : "",
    unit: data ? data.unit : "",
    purchase_unit: data ? data.purchase_unit : "",
    sale_unit: data ? data.sale_unit : "",
    quantity: data ? data.quantity : "",
    product_cost: data ? data.product_cost : "",
    profit_margin: data ? data.profit_margin : "",
    product_price: data ? data.product_price : "",
    wholesale_price: data ? data.wholesale_price : "",
    daily_sale_objective: data ? data.daily_sale_objective : "",
    alert_quantity: data ? data.alert_quantity : "",
    product_tax: data ? data.product_tax : "",
    tax_method: data ? data.tax_method : "",
    warranty: data ? data.warranty : "",
    guarantee: data ? data.guarantee : "",
    image: data ? data.image : "",
    product_details: data ? data.product_details : "",
  };
  return initialValues;
};

export const addPurchaseValues = (data) => {
  const initialValues = {
    purchaseStatus: data ? data.purchaseStatus : "",
    referenceNumber: data ? data.referenceNumber : "",
    warehouse: data ? data.warehouse : "",
    date: data ? data.date : "",
    supplier: data ? data.supplier : "",
    attachDocument: data ? data.attachDocument : "",
    currency: data ? data.currency : "",
    exchangeRate: data ? data.exchangeRate : "",
    selectProduct: data ? data.selectProduct : "",
    orderTax: data ? data.orderTax : "",
    discount: data ? data.discount : "",
    shippingCost: data ? data.shippingCost : "",
    paymentStatus: data ? data.paymentStatus : "",
    note: data ? data.note : "",
  };
  return initialValues;
};

export const addStockCountValues = (data) => {
  const initialValues = {
    warehouse: data ? data.warehouse : "",
    category: data ? data.category : "",
    brand: data ? data.brand : "",
  };
  return initialValues;
};

export const adjustmentValues = (data) => {
  const initialValues = {
    warehouse: data ? data.warehouse : "",
    selectProduct: data ? data.selectProduct : "",
    productDetail: data ? data.productDetails : "",
  };
  return initialValues;
};

export const accountingValues = (data) => {
  const initialValues = {
    accountNumber: data ? data.accountNumber : "",
    name: data ? data.name : "",
    initialBalance: data ? data.initialBalance : "",
    note: data ? data.note : "",
  };
  return initialValues;
};

export const transferValues = (data) => {
  const initialValues = {
    fromAccount: data ? data.fromAccount : "",
    toAccount: data ? data.toAccount : "",
    amount: data ? data.amount : "",
  };
  return initialValues;
};

export const statementValues = (data) => {
  const initialValues = {
    account: data ? data.account : "",
    type: data ? data.type : "",
    chooseDate: data ? data.chooseDate : "",
  };
  return initialValues;
};

export const addAdjustment = (data) => {
  const initialValues = {
    warehouse: data ? data.account : "",
    attachDocument: data ? data.type : "",
    selectProduct: data ? data.chooseDate : "",
  };
  return initialValues;
};

export const addProductValues = (data) => {
  const initialValues = {
    productName: data ? data.productName : "",
    productCode: data ? data.productCode : "",
    barcodeSymbology: data ? data.barcodeSymbology : "",
    brand: data ? data.brand : "",
    category: data ? data.category : "",
    productUnit: data ? data.productUnit : "",
    saleUnit: data ? data.saleUnit : "",
    productCost: data ? data.productCost : "",
    profitMargin: data ? data.profitMargin : "",
    productPrice: data ? data.productPrice : "",
    wholesalePrice: data ? data.wholesalePrice : "",
    dailySaleObjective: data ? data.dailySaleObjective : "",
    alertQuantity: data ? data.alertQuantity : "",
    productTax: data ? data.productTax : "",
    taxMethod: data ? data.taxMethod : "",
    warrantyPeriod: data ? data.warrantyPeriod : "",
    warrantyUnit: data ? data.warrantyUnit : "",
    guaranteePeriod: data ? data.guaranteePeriod : "",
    guaranteeUnit: data ? data.guaranteeUnit : "",
    purchaseUnit: data ? data.purchaseUnit : "",
    featured: data ? data.featured : "",
    embeddedBarcode: data ? data.embeddedBarcode : "",
    initialStock: data ? data.initialStock : "",
    productDetails: data ? data.productDetails : "",
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


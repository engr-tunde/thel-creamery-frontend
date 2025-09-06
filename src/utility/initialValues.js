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
  };
  return initialValues;
};

export const currencyFormatter = (amount) => {
  const fm = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });
  return fm.format(amount);
};

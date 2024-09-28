const displayUGCurrency = (num) => {
  const formatter = new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
  });

  return formatter.format(num);
};

export default displayUGCurrency;

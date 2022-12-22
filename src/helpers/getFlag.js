export const getFlag = (currency) => {
  const currencyLC = currency.toLowerCase().substring(0, 2);
  return `https://flagcdn.com/h40/${currencyLC}.png`;
};

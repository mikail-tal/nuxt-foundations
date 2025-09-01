export const useCurrency = (localCode: string, countryCode: string) => {
  const currency = (amount: number) => {
    return amount.toLocaleString(localCode, {
      style: "currency",
      currency: countryCode,
    });
  };
  return { currency };
};

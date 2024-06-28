export const formatToDecimal = (value: string | number | null) => {
  const number = Number(value);
  const result = (number / 100).toFixed(2);
  return result;
}


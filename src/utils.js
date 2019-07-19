export const decimalMover = num => Math.pow(10, num);

export const formatPricing = ({ basePrice, discount }) => {
  if (discount) {
    return (basePrice * ((100 - discount) / decimalMover(2))) / decimalMover(2);
  }
  return basePrice / decimalMover(2);
};

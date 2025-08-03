/**
 * Generates random card data including card number and expiration date
 * @returns Object containing cardNumber and expiryDate
 */
export const generateCardData = () => {
  const cardNumber = `${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(
    1000 + Math.random() * 9000
  )} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(
    1000 + Math.random() * 9000
  )}`;
  const currentYear = new Date().getFullYear();
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const year = String(currentYear + Math.floor(Math.random() * 5) + 1).slice(
    -2
  );
  const expiryDate = `${month}/${year}`;
  return { cardNumber, expiryDate };
};

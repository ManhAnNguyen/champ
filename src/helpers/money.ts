export function moneyVND(money: string) {
  return `${money} đ`;
}

export const thousandNumComma = (num: string | number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const handleRemoveComma = (string: string) => string.split(".").join("");

/**
 * Number Formater Utils
 *
 * @example
 *
 * let num1 = 10;
 * let num2 = 1023;
 * // 使用默认格式，格式化数字
 * numeral(num1).format() // => "$10.00"
 * numeral(num2).format() // => "$1,023.00"
 * // 使用自定义格式，格式化数字
 * numeral(num1).format("0,0") // => "10" 注意，这里没有 $
 * numeral(num2).format("0,0") // => "1,023" 注意，这里没有 $
 *
 */
import toNumber from "lodash/toNumber";
import isNaN from "lodash/isNaN";
import numeral from "numeral";
numeral.defaultFormat("$0,0.00");
const _numeral = (str: string | number | null) => {
  let num = 0;
  const _str = toNumber(str);
  if (!isNaN(_str)) {
    num = _str;
  }
  return numeral(num);
};

export default _numeral;

export const formatPrice = (str: string | number) => {
  const res = _numeral(str).format();
  if (res === "$NaN") {
    return "$0.00";
  }
  return res;
};

export const percentages = (
  str1: string | number,
  str2: string | number
): string => {
  const res = _numeral(str1).divide(str2).format("0%");
  if (res === "NaN%") {
    return "0%";
  }
  return res;
};

export const total = (data: number[]): string => {
  const res = data.reduce((previous, current) => previous + current, 0);
  return formatPrice(res);
};

export const formatAmount = (str: string | number) => {
  const res = _numeral(str).format("0,0.00");
  if (res === "NaN") {
    return "0";
  }
  return res;
};

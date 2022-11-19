/*

Задание
Реализуйте функцию multiplyNumbersFromRange(), которая перемножает числа в указанном диапазоне включая границы диапазона. Пример вызова:

multiplyNumbersFromRange(1, 5); // 1 * 2 * 3 * 4 * 5 = 120
multiplyNumbersFromRange(2, 3); // 2 * 3 = 6
multiplyNumbersFromRange(6, 6); // 6


*/ 

/* eslint operator-assignment: 0 */

// BEGIN
const multiplyNumbersFromRange = (start, finish) => {
  let i = start;
  let result = 1;

  while (i <= finish) {
    result = result * i;
    i = i + 1;
  }

  return result;
};
// END

export default multiplyNumbersFromRange;
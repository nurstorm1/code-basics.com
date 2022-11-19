/*

Задание
Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву. Функция принимает два параметра:

Строка
Буква для поиска
hasChar('Hexlet', 'H'); // true
hasChar('Hexlet', 'h'); // false
hasChar('Awesomeness', 'm'); // true
hasChar('Awesomeness', 'd'); // false
*/


// BEGIN (write your solution here)
const hasChar = (str, char) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      result = true;
      break;
    } else {
      result = false;
    }
  } return result;
}
// END

export default hasChar;

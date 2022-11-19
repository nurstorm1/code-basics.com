/* 

Общая идея переворота состоит в следующем: нужно брать символы по очереди с начала строки и соединять их в обратном порядке. Звучит довольно просто. Давайте проверим:
reverse('Hexlet'); // telxeH
const reverse = (str) => {
  let i = 0;
  // Нейтральный элемент для строк это пустая строка
  let result = '';
  while (i < str.length) {
    // Соединяем в обратном порядке
    result = `${str[i]}${result}`;
    // То же самое через конкатенацию
    // result = str[i] + result;
    i = i + 1;
  }

  return result;
};

const name = 'Bran';
reverse(name); // 'narB'
// Проверка нейтрального элемента
reverse(''); // ''




Задание
Реализуйте функцию even(), которая возвращает новую строку, состоящую из чётных символов исходной строки. 
*/ 

/* eslint operator-assignment: 0 */

// BEGIN
const even = (str) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if (i % 2 !== 0) {
      result = `${result}${str[i]}`;
    }
    i = i + 1;
  }

  return result;
};

// END

export default even;
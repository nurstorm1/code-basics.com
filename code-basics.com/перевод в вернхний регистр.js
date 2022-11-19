/*
Задание
Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

const text = 'I never look back';
// Каждый третий элемент
makeItFunny(text, 3); // 'I NevEr LooK bAck'

*/


/* eslint-disable no-plusplus */

// BEGIN (write your solution here)
const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';

  while (i < str.length) {
    if ((i + 1) % n !== 0) {
      result = `${result}${str[i]}`;
    } else {
      result = `${result}${str[i].toUpperCase()}`;
    }
    i++;
  }
  return result;
}
// END

export default makeItFunny;

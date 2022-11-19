/*
Задание
Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:

getNumberExplanation(8);   // null

// Объяснения есть только для указанных ниже чисел
getNumberExplanation(666); // 'devil number'
getNumberExplanation(42);  // 'answer for everything'
getNumberExplanation(7);   // 'prime number'
*/


// BEGIN (write your solution here)
const getNumberExplanation = (number) => {
  switch (number) {
    case 7:
      return 'prime number';
    case 42:
      return 'answer for everything';
    case 666:
      return 'devil number';
    default:
      return null;
  }
}
// END

export default getNumberExplanation;

/*

Задание
Реализуйте функцию guessNumber(), которая принимает число и проверяет, равно ли число заданному (пусть это будет 42). Если равно, то функция должна вернуть строку 'You win!', в противном случае нужно вернуть строку 'Try again!'.

guessNumber(42) // 'You win!'
guessNumber(61) // 'Try again!'
*/

// BEGIN (write your solution here)
const guessNumber = (nubm1) => {
  if(nubm1 === 42)
  {
    return 'You win!';}
    else {

return 'Try again!'; 
}
}
// END



export default guessNumber; 
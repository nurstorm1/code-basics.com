/* JavaScript: Упрощенный синтаксис функций
Задание
Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:

const name = 'arya';
console.log(capitalize(name)); // => "Arya"
Чтобы получить подстроку (или символ) из строки, используйте метод slice():

'welcome'.slice(2, 5); // "lco"
Для приведения строки к верхнему регистру используйте метод toUpperCase()

'welcome'.toUpperCase(); // "WELCOME" 
*/ 



// BEGIN (write your solution here)
const capitalize = (name) => `${name.toUpperCase().slice(0, 1)}${name.toLowerCase().slice(1)}`;
// END

export default capitalize;
// END

export default capitalize;

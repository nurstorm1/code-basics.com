/*
Задание
На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.

Напишите для Сэма функцию whoIsThisHouseToStarks(), которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.

Правила определения:

Друзья ('friend'): 'Karstark', 'Tally'
Враги ('enemy'): 'Lannister', 'Frey'
Любые другие семьи считаются нейтральными
Примеры вызова:

whoIsThisHouseToStarks('Karstark'); // 'friend'
whoIsThisHouseToStarks('Frey');     // 'enemy'
whoIsThisHouseToStarks('Joar');     // 'neutral'
whoIsThisHouseToStarks('Ivanov');   // 'neutral'
*/


// BEGIN (write your solution here)
const whoIsThisHouseToStarks = (surname) => {
  let result;
  if (surname === 'Karstark' || surname === 'Tally') {
    result = 'friend'
  } else if (surname === 'Lannister' || surname === 'Frey') {
    result = 'enemy';
  } else {
    result = 'neutral';
  }
  return result;

}
// END

export default whoIsThisHouseToStarks;
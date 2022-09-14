import { getRandomInt, gameEngine } from '../index.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    return num1 > num2 ? [num1, num2] : [num2, num1];
  };
  const getRightAnswer = ([num1, num2]) => {
    let number1 = num1;
    let number2 = num2;
    while (number2) {
      const tmp = number2;
      number2 = number1 % number2;
      number1 = tmp;
    }
    return number1.toString();
  };
  gameEngine(rules, getQuestion, getRightAnswer);
};

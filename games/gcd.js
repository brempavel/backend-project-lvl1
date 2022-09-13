import { getRandomInt, gameEngine } from '../src/index.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    return num1 > num2 ? [num1, num2] : [num2, num1];
  };
  const getRightAnswer = ([num1, num2]) => {
    while(num2) {
      let tmp = num2;
      num2 = num1 % num2;
      num1 = tmp;
    }
    return num1.toString();
  };
  gameEngine(rules, getQuestion, getRightAnswer);
};

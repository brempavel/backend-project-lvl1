import { getRandomInt, gameEngine } from '../src/index.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const getQuestion = () => {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operations = ['+', '-', '*'];
    const operation = operations[getRandomInt(0, 2)];
    console.log(`Question: ${num1} ${operation} ${num2}`);
    return [num1, operation, num2];
  };
  const getRightAnswer = ([num1, operation, num2]) => {
    let answer = 0;
    switch (operation) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
    }
    return answer.toString();
  };
  gameEngine(rules, getQuestion, getRightAnswer);
};

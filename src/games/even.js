import { getRandomInt, gameEngine } from '../index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => {
    const num = getRandomInt(1, 50);
    console.log(`Question: ${num}`);
    return num;
  };
  const getRightAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');
  gameEngine(rules, getQuestion, getRightAnswer);
};

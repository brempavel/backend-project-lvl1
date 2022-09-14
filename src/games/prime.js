import { getRandomInt, gameEngine } from '../index.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestion = () => {
    const num = getRandomInt(2, 100);
    console.log(`Question: ${num}`);
    return num;
  };
  const getRightAnswer = (num) => {
    const s = Math.floor(Math.sqrt(num)) + 1;
    for (let i = 2; i <= s; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  gameEngine(rules, getQuestion, getRightAnswer);
};

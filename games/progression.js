import { getRandomInt, gameEngine } from '../src/index.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const getQuestion = () => {
    let num = getRandomInt(0, 50);
    const step = getRandomInt(1, 20);
    const arr = [];
    while (arr.length < 10) {
      arr.push(num);
      num += step;
    }
    const index = getRandomInt(0, 9);
    const answer = arr[index];
    arr[index] = '..'
    console.log(`Question: ${arr.join(' ').toString()}`);
    return answer.toString();
  };
  const getRightAnswer = (answer) => answer;
  gameEngine(rules, getQuestion, getRightAnswer);
};

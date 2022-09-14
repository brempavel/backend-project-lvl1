import { getRandomInt, gameEngine } from '../src/index.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const getQuestion = () => {
    let num = getRandomInt(0, 50);
    const step = getRandomInt(1, 20);
    const progression = [];
    while (progression.length < 10) {
      progression.push(num);
      num += step;
    }
    const index = getRandomInt(0, 9);
    const answer = progression[index];
    progression[index] = '..';
    console.log(`Question: ${progression.join(' ').toString()}`);
    return answer;
  };
  const getRightAnswer = (answer) => answer.toString();
  gameEngine(rules, getQuestion, getRightAnswer);
};

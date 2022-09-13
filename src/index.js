import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const gameEngine = (rules, getQuestion, getRightAnswer) => {
  const name = greet();
  console.log(rules);

  let counter = 0;
  while (counter < 3) {
    const question = getQuestion();
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getRightAnswer(question);

    if (answer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      counter = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export const getRandomInt = (min, max) => (Math.floor(Math.random() * (max + 1 - min)) + min);

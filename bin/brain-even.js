#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

console.log('Welcome to Brain Games!');
const name = greet();

const isValidAnswer = (answer) => answer === 'yes' || answer === 'no';
const isEven = (number) => number % 2 === 0;
const generateAnswer = (answer) =>
  answer === 'yes'
    ? console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
    : console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");

const startGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter < 3) {
    const number = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');
    if (!isValidAnswer(answer)) {
      console.log(
        `${answer} is not valid answer ;(. Let's try again, ${userName}!`,
      );
      return;
    }

    if (isEven(number) && answer === 'no') {
      generateAnswer(answer);
      return;
    }
    if (answer === 'yes') {
      generateAnswer(answer);
      return;
    }

    counter += 1;
  }
};

startGame(name);

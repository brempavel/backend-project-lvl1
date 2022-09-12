#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

console.log('Welcome to Brain Games!');
const name = greet();

const isValidAnswer = (answer) => answer === 'yes' || answer === 'no';
const isEven = (number) => number % 2 === 0;

const startGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  let counter = 0;
  while (counter < 3) {
    const number = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');
    if (!isValidAnswer(answer)) {
      console.log(
        `${answer} is not valid answer ;(. Let's try again, ${name}!`
      );
      return;
    }

    if (isEven(number)) {
      if (answer === 'yes') {
        counter += 1;
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        return;
      }
    }

    if (!isEven(number)) {
      if (answer === 'no') {
        counter += 1;
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        return;
      }
    }
};

startGame(name);

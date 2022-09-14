#!/usr/bin/env node

console.log('Welcome to Brain Games!');
const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
greet();

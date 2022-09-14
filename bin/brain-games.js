#!/usr/bin/env node
import { greet } from '../src/index.js';

console.log('Welcome to Brain Games!');
const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
greet();

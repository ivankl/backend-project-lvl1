import readLineSync from 'readline-sync';
import { getOperationResult } from './calc';
import { euclidAlgorhytm } from './euclid';
import { evenCheck } from './even';

export const user = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};

export const gameModeCheck = (mode) => {
  let gameId;
  switch (mode) {
    case 'even':
      console.log('\nWelcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
      gameId = 0;
      break;
    case 'calc':
      console.log('\nWelcome to the Brain Games!\nWhat is the result of the expression?\n');
      gameId = 1;
      break;
    case 'gcd':
      console.log('\nWelcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');
      gameId = 2;
      break;
    default:
      console.log('Invalid game mode');
      break;
  }
  return gameId;
};

export const getRandomNumber = () => Math.floor(Math.random() * Math.floor(100));

export const expectedResult = (mode) => {
  let result;
  switch (mode) {
    case 0:
      result = evenCheck();
      break;
    case 1:
      result = `${getOperationResult()}`;
      break;
    case 2:
      result = `${euclidAlgorhytm()}`;
      break;
    default:
      console.log('Invalid game mode');
      break;
  }
  return result;
};

export const userReplyCheck = (expectedAnswer, name) => {
  const reply = readLineSync.question('Your answer: ').toLowerCase();
  if (expectedAnswer === reply) {
    console.log('Correct!');
    return 'Correct';
  }
  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
  return 'Wrong';
};

export const brainGame = (gameMode) => {
  const mode = gameModeCheck(gameMode);
  const name = user();
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    if (userReplyCheck(expectedResult(mode), name) === 'Correct') {
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

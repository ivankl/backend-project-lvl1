import brainGame from '../index';
import getRandomNumber from '../utils';

const gameRule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculateResult = () => {
  let operationResult;
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operation = operations[getRandomNumber(operations.length - 1)];
  switch (operation) {
    case '+':
      operationResult = a + b;
      break;
    case '-':
      operationResult = a - b;
      break;
    case '*':
      operationResult = a * b;
      break;
    default:
      return null;
  }
  return { answer: `${operationResult}`, question: `${a} ${operation} ${b}` };
};

export default () => brainGame(calculateResult, gameRule);

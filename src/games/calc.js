import brainGame from '../index';
import getRandomNumber from '../utils';

const gameRule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculateResultOfExpression = () => {
  let operationRes;
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operation = operations[getRandomNumber(operations.length - 1)];
  switch (operation) {
    case '+':
      operationRes = a + b;
      break;
    case '-':
      operationRes = a - b;
      break;
    case '*':
      operationRes = a * b;
      break;
    default:
      return null;
  }
  return { answer: operationRes, question: `${a} ${operation} ${b}` };
};

export default () => brainGame(calculateResultOfExpression, gameRule);

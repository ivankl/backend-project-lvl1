import { getRandomNumber, brainGame } from '../index';

const getRandomOperation = (maxNumber) => getRandomNumber(maxNumber);

const gameRule = '\nWhat is the result of the expression?';
const operations = ['+', '-', '*'];

const calculateOperationResult = () => {
  let operationRes;
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operation = operations[getRandomOperation(operations.length - 1)];
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
  return { result: operationRes, question: `${a} ${operation} ${b}` };
};

export default () => brainGame(calculateOperationResult, gameRule);

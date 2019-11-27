import { getRandomNumber, brainGame } from '../index';

const getRandomOperation = (maxNumber) => getRandomNumber(maxNumber);


const operations = ['+', '-', '*'];

const calculateOperationResult = () => {
  let operationRes;
  let operation;
  const a = getRandomNumber();
  const b = getRandomNumber();
  switch (operations[getRandomOperation(operations.length - 1)]) {
    case '+':
      operationRes = a + b;
      operation = '+';
      break;
    case '-':
      operationRes = a - b;
      operation = '-';
      break;
    case '*':
      operationRes = a * b;
      operation = '*';
      break;
    default:
      return null;
  }
  return { result: operationRes, question: `${a} ${operation} ${b}` };
};

const gameRules = '\nWhat is the result of the expression?';

export default () => brainGame(calculateOperationResult, gameRules);

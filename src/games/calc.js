import { getRandomNumber, brainGame } from '../index';

const getRandomOperation = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));

const operands = ['+', '-', '*'];

const getOperationResult = () => {
  let operationRes;
  let operand;
  const a = getRandomNumber();
  const b = getRandomNumber();
  switch (operands[getRandomOperation(operands.length)]) {
    case '+':
      operationRes = a + b;
      operand = '+';
      break;
    case '-':
      operationRes = a - b;
      operand = '-';
      break;
    case '*':
      operationRes = a * b;
      operand = '*';
      break;
    default:
      return null;
  }
  return { result: operationRes, question: `${a} ${operand} ${b}` };
};

export const calcGame = () => brainGame(getOperationResult, '\nWhat is the result of the expression?');

export default calcGame;

import { getRandomNumber, user, brainGame } from '../index';

const getRandomOperation = () => Math.floor(Math.random() * Math.floor(3));

const getOperationResult = () => {
  let operationRes;
  let operand;
  const operands = ['+', '-', '*'];
  const a = getRandomNumber();
  const b = getRandomNumber();
  switch (operands[getRandomOperation()]) {
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
      console.log('Invalid operation');
      break;
  }
  const expression = `${a} ${operand} ${b}`;
  console.log(`Question: ${expression}`);
  return operationRes;
};

export const calcGame = () => {
  const name = user();
  console.log('\nWhat is the result of the expression?\n');
  brainGame(getOperationResult, name);
};

export default calcGame;

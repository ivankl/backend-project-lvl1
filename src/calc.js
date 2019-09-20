import { getRandomNumber } from '..';

const getRandomOperation = () => {
  let operand;
  switch (Math.floor(Math.random() * Math.floor(3))) {
    case 0:
      operand = '+';
      break;
    case 1:
      operand = '-';
      break;
    case 2:
      operand = '*';
      break;
    default:
      console.log('Invalid operation');
      break;
  }
  return operand;
};

export const getOperationResult = () => {
  let operationRes;
  const operation = getRandomOperation();
  const a = getRandomNumber();
  const b = getRandomNumber();
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
      console.log('Invalid operation');
      break;
  }
  const expression = `${a} ${operation} ${b}`;
  console.log(`Question: ${expression}`);
  return operationRes;
};

export default getOperationResult;

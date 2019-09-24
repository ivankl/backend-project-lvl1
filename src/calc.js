import { getRandomNumber } from './randomNumber';

const getRandomOperation = () => Math.floor(Math.random() * Math.floor(3));

export const getOperationResult = () => {
  let operationRes;
  let operand;
  const operation = getRandomOperation();
  const a = getRandomNumber();
  const b = getRandomNumber();
  switch (operation) {
    case 0:
      operationRes = a + b;
      operand = '+';
      break;
    case 1:
      operationRes = a - b;
      operand = '-';
      break;
    case 2:
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

export default getOperationResult;

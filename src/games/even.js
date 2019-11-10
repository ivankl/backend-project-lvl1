import { getRandomNumber, user, brainGame } from '../index';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const evenCheck = () => {
  const currentNumber = getRandomNumber();
  console.log(`Question: ${currentNumber}`);
  return isEven(currentNumber);
};

export const evenGame = () => {
  const name = user();
  console.log('\nAnswer "yes" if the number is even, otherwise answer "no".\n');
  brainGame(evenCheck, name);
};

export default evenGame;

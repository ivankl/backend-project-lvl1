import { getRandomNumber, brainGame } from '../index';

const isEven = (number) => (number % 2 === 0);

const evenCheck = () => {
  const currentNumber = getRandomNumber();
  return { result: (isEven(currentNumber) ? 'yes' : 'no'), question: `${currentNumber}` };
};

export const evenGame = () => brainGame(evenCheck, '\nAnswer "yes" if the number is even, otherwise answer "no".');


export default evenGame;

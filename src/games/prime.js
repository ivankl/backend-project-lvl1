import { getRandomNumber, brainGame } from '../index';


const isPrime = (num) => {
  const iter = (denominator, n) => {
    if (denominator > Math.sqrt(num)) {
      return 'yes';
    }
    if (num % denominator === 0 || n === 1) {
      return 'no';
    }
    return iter(denominator + 1, n);
  };
  return iter(2, num);
};

const primeCheck = () => {
  const currentNumber = getRandomNumber();
  return { result: isPrime(currentNumber), question: `${currentNumber}` };
};

export const primeGame = () => brainGame(primeCheck, 'Answer "yes" if the number is prime, otherwise answer "no".');

export default primeGame;

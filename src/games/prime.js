import { getRandomNumber, brainGame } from '../index';


const isPrime = (num) => {
  const iter = (denominator, n) => {
    if (denominator > Math.sqrt(num)) {
      return true;
    }
    if (num % denominator === 0 || n === 1) {
      return false;
    }
    return iter(denominator + 1, n);
  };
  return iter(2, num);
};

const primeCheck = () => {
  const gameQuestion = getRandomNumber();
  return { result: (isPrime(gameQuestion) ? 'yes' : 'no'), question: `${gameQuestion}` };
};

const gameRule = 'Answer "yes" if the number is prime, otherwise answer "no".';

export default () => brainGame(primeCheck, gameRule);

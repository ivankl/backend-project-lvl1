import { getRandomNumber, user, brainGame } from '../index';


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
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  return isPrime(number);
};

export const primeGame = () => {
  const name = user();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
  brainGame(primeCheck, name);
};

export default primeGame;

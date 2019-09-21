import { getRandomNumber } from './randomNumber';

const isPrime = (denominator, num) => {
  if (num % denominator === 0 || num === 1) {
    return 'no';
  }
  if (denominator > Math.sqrt(num)) {
    return 'yes';
  }
  return isPrime(denominator + 1, num);
};

export const primeCheck = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  return isPrime(2, number);
};

export default primeCheck;

import { getRandomNumber, brainGame } from '../index';


const findGCD = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return findGCD(b, a % b);
};

export const gcdCalculation = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  if (num1 === 0 && num2 === 0) {
    return 0;
  }
  if (num1 === 0 || num2 === 0) {
    return 0;
  }
  return { result: (num1 > num2 ? findGCD(num1, num2) : findGCD(num2, num1)), question: `${num1} ${num2}` };
};

const gameRules = '\nFind the greatest common divisor of given numbers.';

export default () => brainGame(gcdCalculation, gameRules);

import { getRandomNumber, brainGame } from '../index';


const findGCD = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return findGCD(b, a % b);
};

export const gcdCalculation = () => {
  const n1 = getRandomNumber();
  const n2 = getRandomNumber();
  if (n1 === 0 && n2 === 0) {
    return 0;
  }
  if (n1 === 0 || n2 === 0) {
    return 0;
  }
  return { result: (n1 > n2 ? findGCD(n1, n2) : findGCD(n2, n1)), question: `${n1} ${n2}` };
};

const gameRule = '\nFind the greatest common divisor of given numbers.';

export default () => brainGame(gcdCalculation, gameRule);

import brainGame from '../index';
import getRandomNumber from '../utils';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return findGCD(b, a % b);
};

export const сalculateResult = () => {
  const n1 = getRandomNumber();
  const n2 = getRandomNumber();
  if (n1 === 0 && n2 === 0) {
    return 0;
  }
  if (n1 === 0 || n2 === 0) {
    return 0;
  }
  return { answer: findGCD(Math.max(n1, n2), Math.min(n1, n2)), question: `${n1} ${n2}` };
};

export default () => brainGame(сalculateResult, gameRule);

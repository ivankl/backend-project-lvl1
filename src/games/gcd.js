import brainGame from '../index';
import getRandomNumber from '../utils';

const gameRule = 'Find the greatest common divisor of given numbers.';

const iter = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return iter(b, a % b);
};

const findGCD = (a, b) => {
  if (a === 0 && b === 0) {
    return 0;
  }
  if (a === 0 || a === 0) {
    return 0;
  }
  return iter(Math.max(a, b), Math.min(a, b));
};

const generateGameQuestion = () => {
  const n1 = getRandomNumber();
  const n2 = getRandomNumber();
  return { answer: `${findGCD(n1, n2)}`, question: `${n1} ${n2}` };
};

export default () => brainGame(generateGameQuestion, gameRule);

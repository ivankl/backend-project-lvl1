import brainGame from '../index';
import getRandomNumber from '../utils';

const gameRule = 'Answer "yes" if the number is prime, otherwise answer "no".';

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

const generateGameQuestion = () => {
  const gameQuestion = getRandomNumber();
  return { answer: (isPrime(gameQuestion) ? 'yes' : 'no'), question: gameQuestion };
};

export default () => brainGame(generateGameQuestion, gameRule);

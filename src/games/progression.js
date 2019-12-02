import brainGame from '../index';
import getRandomNumber from '../utils';

const progressionLength = 10;
const gameRule = 'What number is missing in the progression?';

const calculateProgression = (result, index, missingElement, currentElement, step) => {
  if (index > progressionLength - 1) {
    return result;
  }
  if (index === missingElement) {
    return calculateProgression(`${result} ..`, index + 1, missingElement, currentElement + step, step);
  }
  return calculateProgression(`${result} ${currentElement}`, index + 1, missingElement, currentElement + step, step);
};

const calculateValueOfSkippedNumber = () => {
  const firstElement = getRandomNumber();
  const step = getRandomNumber();
  const location = getRandomNumber(progressionLength - 1);
  return { answer: (firstElement + location * step), question: `${calculateProgression('', 0, location, firstElement, step)}` };
};

export default () => brainGame(calculateValueOfSkippedNumber, gameRule);

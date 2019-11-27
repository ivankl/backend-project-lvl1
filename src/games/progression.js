import { getRandomNumber, brainGame } from '../index';

const progressionLength = 10;

const displayProgression = (string, index, missingElement, currentElement, step, elementAmount) => {
  if (index > elementAmount) {
    return string;
  }
  if (index === missingElement) {
    return displayProgression(`${string} .. `, index + 1, missingElement, currentElement + step, step, elementAmount);
  }
  return displayProgression(`${string} ${currentElement}`, index + 1, missingElement, currentElement + step, step, elementAmount);
};

const valueOfSkippedNumber = () => {
  const firstElement = getRandomNumber();
  const step = getRandomNumber();
  const location = getRandomNumber(progressionLength);
  return { result: (firstElement + location * step), question: `${displayProgression('', 0, location, firstElement, step, progressionLength)}` };
};

const gameRules = '\nWhat number is missing in the progression?';

export default () => brainGame(valueOfSkippedNumber, gameRules);

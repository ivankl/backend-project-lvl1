import { getRandomNumber, brainGame } from '../index';


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
  const progressionLength = 9;
  const initialNumber = getRandomNumber();
  const step = getRandomNumber();
  const location = Math.floor(Math.random() * Math.floor(progressionLength));
  return { result: (initialNumber + location * step), question: `${displayProgression('', 0, location, initialNumber, step, progressionLength)}` };
};

export const progressionGame = () => brainGame(valueOfSkippedNumber, '\nWhat number is missing in the progression?');

export default progressionGame;

import { getRandomNumber, brainGame } from '../index';


const displayProgression = (string, index, missingElement, currentElement, step) => {
  if (index > 9) {
    return string;
  }
  if (index === missingElement) {
    return displayProgression(`${string} .. `, index + 1, missingElement, currentElement + step, step);
  }
  return displayProgression(`${string} ${currentElement}`, index + 1, missingElement, currentElement + step, step);
};

const valueOfSkippedNumber = () => {
  const initialNumber = getRandomNumber();
  const step = getRandomNumber();
  const location = Math.floor(Math.random() * Math.floor(9));
  return { result: (initialNumber + location * step), question: `${displayProgression('', 0, location, initialNumber, step)}` };
};

export const progressionGame = () => brainGame(valueOfSkippedNumber, '\nWhat number is missing in the progression?');

export default progressionGame;

import { getRandomNumber } from './randomNumber';

const displayProgression = (string, index, missingElement, currentElement, step) => {
  if (index > 9) {
    return string;
  }
  if (index === missingElement) {
    return displayProgression(`${string} .. `, index + 1, missingElement, currentElement + step, step);
  }
  return displayProgression(`${string} ${currentElement}`, index + 1, missingElement, currentElement + step, step);
};

export const valueOfSkippedNumber = () => {
  const initialNumber = getRandomNumber();
  const step = getRandomNumber();
  const location = Math.floor(Math.random() * Math.floor(9));
  console.log(`Question: ${displayProgression('', 0, location, initialNumber, step)}`);
  return initialNumber + location * step;
};

export default valueOfSkippedNumber;

import brainGame from '../index';
import getRandomNumber from '../utils';

const progressionLength = 10;
const gameRule = 'What number is missing in the progression?';

const generateElementsForGameQuestion = (missingElementIndex, initialElement, step) => {
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingElementIndex) {
      result = `${result} ..`;
    } else {
      result = `${result} ${initialElement + i * step}`;
    }
  }
  return result.trim();
};

const generateGameQuestion = () => {
  const firstElement = getRandomNumber();
  const step = getRandomNumber();
  const location = getRandomNumber(progressionLength - 1);
  return { answer: `${(firstElement + location * step)}`, question: `${generateElementsForGameQuestion(location, firstElement, step)}` };
};

export default () => brainGame(generateGameQuestion, gameRule);

import brainGame from '../index';
import getRandomNumber from '../utils';

const isEven = (number) => (number % 2 === 0);
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameQuestion = () => {
  const gameQuestion = getRandomNumber();
  return { answer: (isEven(gameQuestion) ? 'yes' : 'no'), question: gameQuestion };
};

export default () => brainGame(generateGameQuestion, gameRule);

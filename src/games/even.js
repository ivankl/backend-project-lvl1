import { getRandomNumber, brainGame } from '../index';

const isEven = (number) => (number % 2 === 0);

const evenCheck = () => {
  const questionNumber = getRandomNumber();
  return { result: (isEven(questionNumber) ? 'yes' : 'no'), question: `${questionNumber}` };
};

const gameRules = '\nAnswer "yes" if the number is even, otherwise answer "no".';

export default () => brainGame(evenCheck, gameRules);

import { getRandomNumber, brainGame } from '../index';

const isEven = (number) => (number % 2 === 0);
const gameRule = '\nAnswer "yes" if the number is even, otherwise answer "no".';

const evenCheck = () => {
  const gameQuestion = getRandomNumber();
  return { result: (isEven(gameQuestion) ? 'yes' : 'no'), question: `${gameQuestion}` };
};

export default () => brainGame(evenCheck, gameRule);

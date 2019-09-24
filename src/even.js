import { getRandomNumber } from './randomNumber';

export const evenCheck = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  return (number % 2 === 0 ? 'yes' : 'no');
};

export default evenCheck;

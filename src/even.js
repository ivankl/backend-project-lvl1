import { getRandomNumber } from './randomNumber';

export const evenCheck = () => {
  const expression = getRandomNumber();
  console.log(`Question: ${expression}`);
  return (expression % 2 === 0 ? 'yes' : 'no');
};

export default evenCheck;

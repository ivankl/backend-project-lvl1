import { getRandomNumber } from '..';

export const euclidAlgorhytm = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const iter = (a, b) => {
    if (a % b === 0) {
      return b;
    }
    return iter(b, a % b);
  };
  console.log(`Question: ${num1} ${num2}`);
  return (num1 > num2 ? iter(num1, num2) : iter(num2, num1));
};

export default euclidAlgorhytm;

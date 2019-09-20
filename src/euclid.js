import { getRandomNumber } from './randomNumber';

const euclidAlgorhytm = (a, b) => {
  if (a % b === 0) {
    return b;
  }
  return euclidAlgorhytm(b, a % b);
};

export const gcdCalculation = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  console.log(`Question: ${num1} ${num2}`);
  if (num1 === 0 && num2 === 0) {
    console.log('\nWow, you are lucky! Both numbers are 0. It is known, that GCD(0,0) = 0.\n',
    'Please, type 0 and press Enter. It counts as a correct answer\n');
    return 0;
  }
  if (num1 === 0 || num2 === 0) {
    console.log ('Ooops. One of the numbers is 0. The task is incorrect. You can generate a new one by typing 0.\n',
      'It will be counted as a "correct" anwser. Sorry.');
    return 0;
  }
  return (num1 > num2 ? euclidAlgorhytm(num1, num2) : euclidAlgorhytm(num2, num1));
};

export default euclidAlgorhytm;

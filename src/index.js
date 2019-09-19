import readLineSync from 'readline-sync';

export const user = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};

export const evenNumberCheck = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const getRandomNumber = () => Math.floor(Math.random() * Math.floor(100));

export const userReplyCheck = (number, name) => {
  const desiredAnswer = evenNumberCheck(number);
  const reply = readLineSync.question('Your answer: ');
  if (desiredAnswer === reply) {
    console.log('Correct!');
    return 0;
  }
  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${desiredAnswer}'.\nLet's try again, ${name}`);
  return 1;
};

export const brainGame = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
  const name = user();
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    if (userReplyCheck(randomNumber, name) === 0) {
      correctAnswers += 1;
    } else {
      correctAnswers += 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

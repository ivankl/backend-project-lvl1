import readLineSync from 'readline-sync';

export const user = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\nWelcome to the Brain Games!\n`);
  return userName;
};

export const getRandomNumber = () => Math.floor(Math.random() * Math.floor(50));

export const userReplyCheck = (expectedAnswer, name) => {
  const reply = readLineSync.question('Your answer: ').toLowerCase();
  if (`${expectedAnswer}` === reply) {
    console.log('Correct!');
    return 'Correct';
  }
  console.log(`'${reply}' is wrong answer :(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
  return 'Wrong';
};

export const brainGame = (currentGameFunction, name) => {
  let correctAnswers = 0;
  let computedAnswer;
  while (correctAnswers < 3) {
    computedAnswer = currentGameFunction();
    if (userReplyCheck(computedAnswer, name) === 'Correct') {
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

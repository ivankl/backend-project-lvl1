import readLineSync from 'readline-sync';

export const getRandomNumber = (max = 30, min = 0) => Math
  .floor(Math.random() * (max - min + 1)) + min;

export const userReplyCheck = (expectedAnswer, name) => {
  const reply = readLineSync.question('Your answer: ').toLowerCase();
  if (`${expectedAnswer}` === reply) {
    console.log('Correct!');
    return 'Correct';
  }
  console.log(`'${reply}' is wrong answer :(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
  return 'Wrong';
};

export const brainGame = (currentGameFunction, greeting) => {
  console.log(`\nWelcome to the Brain Games!\n${greeting}`);
  const name = readLineSync.question('\nMay I have your name? ');
  console.log(`Hi, ${name}!`);
  let correctAnswers = 0;
  let gameQuestion = {};
  while (correctAnswers < 3) {
    gameQuestion = currentGameFunction();
    console.log(`\nQuestion: ${gameQuestion.question}`);
    if (userReplyCheck(gameQuestion.result, name) === 'Correct') {
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
    }
  }
  console.log(`\nCongratulations, ${name}!`);
};

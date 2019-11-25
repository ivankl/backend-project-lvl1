import readLineSync from 'readline-sync';

export const getRandomNumber = () => {
  const min = 5;
  const max = 30;
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

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
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!\nWelcome to the Brain Games!`);
  console.log(`${greeting}`);
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

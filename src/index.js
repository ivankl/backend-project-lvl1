import readLineSync from 'readline-sync';

const answersNeededToWin = 3;

export default (currentGameFunction, greeting) => {
  console.log(`\nWelcome to the Brain Games!\n${greeting}`);
  const name = readLineSync.question('\nMay I have your name? ');
  console.log(`Hi, ${name}!`);
  let currentRound = {};
  for (let i = 1; i <= answersNeededToWin; i += 1) {
    currentRound = currentGameFunction();
    console.log(`\nQuestion: ${currentRound.question}`);
    const userAnswer = readLineSync.question('Your answer: ').toLowerCase();
    if (currentRound.answer === userAnswer) {
      console.log('Correct!');
    } else {
      i = 0;
      console.log(`'${userAnswer}' is wrong answer :(`);
      console.log(`Correct answer was '${currentRound.answer}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`\nCongratulations, ${name}!`);
};

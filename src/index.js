import readLineSync from 'readline-sync';

const answersNeededToWin = 3;

export default (currentGameFunction, greeting) => {
  console.log(`\nWelcome to the Brain Games!\n${greeting}`);
  const name = readLineSync.question('\nMay I have your name? ');
  console.log(`Hi, ${name}!`);
  let correctAnswers = 0;
  let currentRound = {};
  while (correctAnswers < answersNeededToWin) {
    currentRound = currentGameFunction();
    console.log(`\nQuestion: ${currentRound.question}`);
    const reply = readLineSync.question('Your answer: ').toLowerCase();
    if (`${currentRound.answer}` === reply) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
      console.log(`'${reply}' is wrong answer :(. Correct answer was '${currentRound.answer}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`\nCongratulations, ${name}!`);
};

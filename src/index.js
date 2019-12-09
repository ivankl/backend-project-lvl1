import readLineSync from 'readline-sync';

const answersNeededToWin = 3;

export default (currentGameFunction, greeting) => {
  console.log(`\nWelcome to the Brain Games!\n${greeting}`);
  const name = readLineSync.question('\nMay I have your name? ');
  console.log(`Hi, ${name}!`);
  let currentRound = {};
  for (let correctAnswerCount = 1;
    correctAnswerCount <= answersNeededToWin; correctAnswerCount += 1) {
    currentRound = currentGameFunction();
    console.log(`\nQuestion: ${currentRound.question}`);
    const userReply = readLineSync.question('Your answer: ').toLowerCase();
    if (currentRound.answer === userReply) {
      console.log('Correct!');
    } else {
      correctAnswerCount = 0;
      console.log(`'${userReply}' is wrong answer :(`);
      console.log(`Correct answer was '${currentRound.answer}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`\nCongratulations, ${name}!`);
};

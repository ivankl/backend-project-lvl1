import readLineSync from 'readline-sync';

export const user = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};

export const gameModeCheck = (mode) => {
  let gameId;
  switch (mode) {
    case 'even':
      console.log('\nWelcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
      gameId = 0;
      break;
    case 'calc':
      console.log('\nWelcome to the Brain Games!\nWhat is the result of the expression.\n');
      gameId = 1;
      break;
    default:
      console.log('Invalid game mode');
      break;
  }
  return gameId;
};

export const getRandomNumber = () => Math.floor(Math.random() * Math.floor(100));

export const getRandomOperation = () => {
  let operand;
  switch (Math.floor(Math.random() * Math.floor(3))) {
    case 0:
      operand = '+';
      break;
    case 1:
      operand = '-';
      break;
    case 2:
      operand = '*';
      break;
    default:
      console.log('Invalid operation');
      break;
  }
  return operand;
};

export const getOperationResult = (a, b, operation) => {
  let operationRes;
  switch (operation) {
    case '+':
      operationRes = a + b;
      break;
    case '-':
      operationRes = a - b;
      break;
    case '*':
      operationRes = a * b;
      break;
    default:
      console.log('Invalid operation');
      break;
  }
  return operationRes;
};

export const expectedResult = (mode) => {
  let expression;
  let result;
  let a;
  let b;
  let operation;
  switch (mode) {
    case 0:
      expression = getRandomNumber();
      result = (expression % 2 === 0 ? 'yes' : 'no');
      break;
    case 1:
      a = getRandomNumber();
      b = getRandomNumber();
      operation = getRandomOperation();
      expression = `${a} ${operation} ${b}`;
      result = `${getOperationResult(a, b, operation)}`;
      break;
    default:
      console.log('Invalid game mode');
      break;
  }
  console.log(`Question: ${expression}`);
  return result;
};

export const userReplyCheck = (desiredAnswer, name) => {
  const reply = readLineSync.question('Your answer: ').toLowerCase();
  if (desiredAnswer === reply) {
    console.log('Correct!');
    return 0;
  }
  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${desiredAnswer}'.\nLet's try again, ${name}`);
  return 1;
};

export const brainGame = (gameMode) => {
  const mode = gameModeCheck(gameMode);
  const name = user();
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    if (userReplyCheck(expectedResult(mode), name) === 0) {
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

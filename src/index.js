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
      console.log('\nWelcome to the Brain Games!\nWhat is the result of the expression?\n');
      gameId = 1;
      break;
    case 'gcd':
      console.log('\nWelcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');
      gameId = 2;
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

export const getOperationResult = (operation) => {
  let operationRes;
  const a = getRandomNumber();
  const b = getRandomNumber();
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
  const expression = `${a} ${operation} ${b}`;
  console.log(`Question: ${expression}`);
  return operationRes;
};

export const evenCheck = () => {
  const expression = getRandomNumber();
  console.log(`Question: ${expression}`);
  return (expression % 2 === 0 ? 'yes' : 'no');
};

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

export const expectedResult = (mode) => {
  let result;
  let operation;
  switch (mode) {
    case 0:
      result = evenCheck();
      break;
    case 1:
      operation = getRandomOperation();
      result = `${getOperationResult(operation)}`;
      break;
    case 2:
      result = `${euclidAlgorhytm()}`;
      break;
    default:
      console.log('Invalid game mode');
      break;
  }
  return result;
};

export const userReplyCheck = (expectedAnswer, name) => {
  const reply = readLineSync.question('Your answer: ').toLowerCase();
  if (expectedAnswer === reply) {
    console.log('Correct!');
    return 'Correct';
  }
  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
  return 'Wrong';
};

export const brainGame = (gameMode) => {
  const mode = gameModeCheck(gameMode);
  const name = user();
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    if (userReplyCheck(expectedResult(mode), name) === 'Correct') {
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

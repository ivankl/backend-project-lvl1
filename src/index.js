import readLineSync from 'readline-sync';

export default function user() {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
}

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brainGame = exports.userReplyCheck = exports.getRandomNumber = exports.evenNumberCheck = exports.user = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const user = () => {
  const userName = _readlineSync.default.question('May I have your name? ');

  console.log(`Hi, ${userName}!\n`);
  return userName;
};

exports.user = user;

const evenNumberCheck = number => number % 2 === 0 ? 'yes' : 'no';

exports.evenNumberCheck = evenNumberCheck;

const getRandomNumber = () => Math.floor(Math.random() * Math.floor(100));

exports.getRandomNumber = getRandomNumber;

const userReplyCheck = (number, name) => {
  const desiredAnswer = evenNumberCheck(number);

  const reply = _readlineSync.default.question('Your answer: ');

  if (desiredAnswer === reply) {
    console.log('Correct!');
    return 0;
  }

  console.log(`'${reply}' is wrong answer ;(. Correct answer was '${desiredAnswer}'.\nLet's try again, ${name}`);
  return 1;
};

exports.userReplyCheck = userReplyCheck;

const brainGame = () => {
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

  console.log(`Congratulations, ${name}`);
};

exports.brainGame = brainGame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VyIiwidXNlck5hbWUiLCJyZWFkTGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJldmVuTnVtYmVyQ2hlY2siLCJudW1iZXIiLCJnZXRSYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ1c2VyUmVwbHlDaGVjayIsIm5hbWUiLCJkZXNpcmVkQW5zd2VyIiwicmVwbHkiLCJicmFpbkdhbWUiLCJjb3JyZWN0QW5zd2VycyIsInJhbmRvbU51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDeEIsUUFBTUMsUUFBUSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBakI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLE9BQU1KLFFBQVMsS0FBNUI7QUFDQSxTQUFPQSxRQUFQO0FBQ0QsQ0FKTTs7OztBQU1BLE1BQU1LLGVBQWUsR0FBSUMsTUFBRCxJQUFhQSxNQUFNLEdBQUcsQ0FBVCxLQUFlLENBQWYsR0FBbUIsS0FBbkIsR0FBMkIsSUFBaEU7Ozs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsR0FBWCxDQUEzQixDQUE5Qjs7OztBQUVBLE1BQU1FLGNBQWMsR0FBRyxDQUFDTCxNQUFELEVBQVNNLElBQVQsS0FBa0I7QUFDOUMsUUFBTUMsYUFBYSxHQUFHUixlQUFlLENBQUNDLE1BQUQsQ0FBckM7O0FBQ0EsUUFBTVEsS0FBSyxHQUFHYixzQkFBYUMsUUFBYixDQUFzQixlQUF0QixDQUFkOztBQUNBLE1BQUlXLGFBQWEsS0FBS0MsS0FBdEIsRUFBNkI7QUFDM0JYLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxXQUFPLENBQVA7QUFDRDs7QUFDREQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsSUFBR1UsS0FBTSw2Q0FBNENELGFBQWMsd0JBQXVCRCxJQUFLLEVBQTVHO0FBQ0EsU0FBTyxDQUFQO0FBQ0QsQ0FUTTs7OztBQVdBLE1BQU1HLFNBQVMsR0FBRyxNQUFNO0FBQzdCWixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyRkFBWjtBQUNBLFFBQU1RLElBQUksR0FBR2IsSUFBSSxFQUFqQjtBQUNBLE1BQUlpQixjQUFjLEdBQUcsQ0FBckI7O0FBQ0EsU0FBT0EsY0FBYyxHQUFHLENBQXhCLEVBQTJCO0FBQ3pCLFVBQU1DLFlBQVksR0FBR1YsZUFBZSxFQUFwQztBQUNBSixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZYSxZQUFhLEVBQXRDOztBQUNBLFFBQUlOLGNBQWMsQ0FBQ00sWUFBRCxFQUFlTCxJQUFmLENBQWQsS0FBdUMsQ0FBM0MsRUFBOEM7QUFDNUNJLE1BQUFBLGNBQWMsSUFBSSxDQUFsQjtBQUNELEtBRkQsTUFFTztBQUNMQSxNQUFBQSxjQUFjLElBQUksQ0FBbEI7QUFDRDtBQUNGOztBQUNEYixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJRLElBQUssRUFBckM7QUFDRCxDQWRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRMaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuZXhwb3J0IGNvbnN0IHVzZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gcmVhZExpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8gJyk7XG4gIGNvbnNvbGUubG9nKGBIaSwgJHt1c2VyTmFtZX0hXFxuYCk7XG4gIHJldHVybiB1c2VyTmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBldmVuTnVtYmVyQ2hlY2sgPSAobnVtYmVyKSA9PiAobnVtYmVyICUgMiA9PT0gMCA/ICd5ZXMnIDogJ25vJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDEwMCkpO1xuXG5leHBvcnQgY29uc3QgdXNlclJlcGx5Q2hlY2sgPSAobnVtYmVyLCBuYW1lKSA9PiB7XG4gIGNvbnN0IGRlc2lyZWRBbnN3ZXIgPSBldmVuTnVtYmVyQ2hlY2sobnVtYmVyKTtcbiAgY29uc3QgcmVwbHkgPSByZWFkTGluZVN5bmMucXVlc3Rpb24oJ1lvdXIgYW5zd2VyOiAnKTtcbiAgaWYgKGRlc2lyZWRBbnN3ZXIgPT09IHJlcGx5KSB7XG4gICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgY29uc29sZS5sb2coYCcke3JlcGx5fScgaXMgd3JvbmcgYW5zd2VyIDsoLiBDb3JyZWN0IGFuc3dlciB3YXMgJyR7ZGVzaXJlZEFuc3dlcn0nLlxcbkxldCdzIHRyeSBhZ2FpbiwgJHtuYW1lfWApO1xuICByZXR1cm4gMTtcbn07XG5cbmV4cG9ydCBjb25zdCBicmFpbkdhbWUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyFcXG5BbnN3ZXIgXCJ5ZXNcIiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLlxcbicpO1xuICBjb25zdCBuYW1lID0gdXNlcigpO1xuICBsZXQgY29ycmVjdEFuc3dlcnMgPSAwO1xuICB3aGlsZSAoY29ycmVjdEFuc3dlcnMgPCAzKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gICAgY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke3JhbmRvbU51bWJlcn1gKTtcbiAgICBpZiAodXNlclJlcGx5Q2hlY2socmFuZG9tTnVtYmVyLCBuYW1lKSA9PT0gMCkge1xuICAgICAgY29ycmVjdEFuc3dlcnMgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29ycmVjdEFuc3dlcnMgKz0gMDtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHtuYW1lfWApO1xufTtcbiJdfQ==
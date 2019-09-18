"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = user;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function user() {
  var userName = _readlineSync.default.question('May I have your name? ');

  console.log('Hi, ' + userName + '!');
  return;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VyIiwidXNlck5hbWUiLCJyZWFkTGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLFNBQVNBLElBQVQsR0FBZ0I7QUFDdEIsTUFBSUMsUUFBUSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix3QkFBdEIsQ0FBZjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBU0osUUFBVCxHQUFvQixHQUFoQztBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZExpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlcigpIHsgXG5cdHZhciB1c2VyTmFtZSA9IHJlYWRMaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuXHRjb25zb2xlLmxvZygnSGksICcgKyB1c2VyTmFtZSArICchJyk7XG5cdHJldHVybjtcbn0iXX0=
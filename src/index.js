import readLineSync from 'readline-sync';

export function user() { 
	var userName = readLineSync.question('May I have your name? ');
	console.log('Hi, ' + userName + '!');
	return;
}
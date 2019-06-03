console.log('node running...');

// var http = require('http')

// onRequest(request, response) {
//   response.writeHead(200, {
//     'Content-Type': 'text/plain'});
//   response.write('Hello Gabi');

//   response.end();
// }

// http.createServer(onRequest).listen(8000)

// document.addEventListener('DOMContentLoaded', getWhile2);

// shift alt down arrow - copy line down on next line
// alt down arrow - move line down or up on next line
// function goWhile() {
//   console.log('In goWhile function...');
// }

// function getWhile2() {
//   console.log('In goWhile function...');
// }

// console.log('object');
// console.error('object');

const add = (num1, num2) => {
  console.log('Logged Output: add -> num1', num1);
  console.log(num1 + num2);
};

add(1, 2);

const arr = [1, 2, 3, 4, 5, 6];
console.log('Logged Output: arr', arr);

arr.forEach(num => console.log(num));

// ctrl + alt + L
const name = 'Pat';
console.log('Logged Output: name', name);

// alt + shift + c -- Comment all console.log
// alt + shift + u -- uncomment all console.log
// alt + shift + d -- delete all console.log

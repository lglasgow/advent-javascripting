var fs = require('fs');

var input = fs.readFileSync('./input', 'utf8');

console.log('length', input.length);

var count = 0;
var past;
for(var i = 0; i < input.length; i++) {
  if(input[i] === '(') {
    count++;
  } else if(input[i] === ')') {
    count--;
  };
  if(count === -1 && !past) {
    past = true;
    console.log(i);
  }
};


console.log('The count is', count);

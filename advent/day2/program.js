var fs = require('fs');

var input = fs.readFileSync('./input', 'utf8');

rl.on('line', function(line){
  console.log('length', input.line);
})


var parser = /(\d+)x(\d+)x(\d+)/;

for(i = 0; i < input.length; i++){

}

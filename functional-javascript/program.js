// #1
// function upperCaser(input) {
//   return input.toUpperCase();
// }
//
// module.exports = upperCaser;

// #2
// function repeat(operation, num) {
//   for(var i; i < num; i++) {
//     operation();
//   }
// }
//
// module.exports = repeat

// #3
// function doubleAll(numbers) {
//   var results = [];
//   numbers.map(function(num){
//     results.push(num * 2);
//   });
//
//   return results;
// }
// module.exports = function doubleAll(numbers) {
//   return numbers.map(function double(num) {
//     return num * 2
//   })
// }
//
// module.exports = doubleAll

// #4
// function getShortMessages(messages) {
//   //console.log('this is an array:', messages);
//    return messages.filter(function(el){
//     return el.message.length < 50;
//   }).map(function(el){
//     return el.message;
//   });
// }
//
// module.exports = getShortMessages

// #5
// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function(user){
//       return goodUsers.some(function(good){
//         return good.id === user.id;
//       });
//     });
//     // if(goodUsers.some === true) {
//     //   console.log();
//     // } else {
//     //   console.log('goodbye');
//     // };
//     // return submittedUsers.every(function(el){
//     //   return el;
//     // });
//     // return submittedUsers;
//     // return submittedUsers.some(function(el){
//     //     return goodUsers.
//     // });
//   };
// }
//
// module.exports = checkUsersValid

// #6
function countWords(inputWords) {
  retrun inputWords.reduce(function(reduced){
      
  });
}

module.exports = countWords

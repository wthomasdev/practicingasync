// setTimeout(function() {
//   console.log(1);
// }, 2000);
// console.log(2);


function printInTwoSeconds(message) {
  setTimeout(function() {
    console.log(message);
  },2000);
}
printInTwoSeconds("hello aysnc!");

// var userName = prompt("Tell me your name.");
// var message;
// if (userName = "Scott") {
//   message = "That's right, Scott was the right answer."
//   // console.log("You got the name right.")
// } else if (userName === "Bambi") {
//   message = "That's right, Bambi was the right answer."
//   // console.log ("Congrats you got the second name right.")
// } else {
//   message = "you were way off!"
//   // console.log('You got both wrong.')
// }


var arr = [1, 3, "Blue", true, "Dog"];
// for (var i = arr.length - 1; i >= 0; i--) { // for(start, stop, step)
//   console.log(arr[i] +": " + typeof arr[i]);
//   // if (typeof arr[i] === 'string') {
//   //   console.log(arr[i]);
//   // }
// }

// var userNum = parseInt (prompt("guess my number"));
// while (userNum !== 10) {
//   console.log(userNum);
//   userNum = parseInt (prompt ("Guess again."));
// }

var counter = 1;
var userNum = parseInt (prompt("guess my number"));
while(counter < 4) {
if (userNum === 10){
  alert ("you nailed it)");
  break;
} else if (userNum > 10) {
  alert ("your number was too high.");
  counter++;
  console.log("the counter is at: " + counter);
  userNum = parseInt (prompt("guess lower."));
} else if (userNum < 10) {
  alert ("your number was too low.");
  counter++;
  console.log("the counter is at: " + counter);
  userNum = parseInt (prompt("guess higher."));
}
}

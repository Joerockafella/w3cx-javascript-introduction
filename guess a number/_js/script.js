var randomNumber = getRandomNumber();
console.log("Picked number is " + randomNumber);

var guess = document.querySelector("#guess");
var result = document.querySelector("#replyText");

function getRandomNumber() {
  var getNumber = Math.round(Math.random() * 20);
  return getNumber;
}

function getInput() {
  var guessNumber = guess.value;
  if (guessNumber % 1 !== 0 ) {
    result.innerHTML = guessNumber + " is not an Integer!  Please try again.";
  } else if (guessNumber === "") {
    result.innerHTML = "Input a number!!!";
  }else if ((guessNumber < 1) || (guessNumber > 20)) {
    result.innerHTML = guessNumber + " is not between 1-10.";
  } else if (guessNumber < randomNumber) {
    result.innerHTML = guessNumber + " is too small, try a bigger number!";
  } else if (guessNumber > randomNumber) {
    result.innerHTML = guessNumber + " is too big, try a smaller number!";
  } else if (guessNumber - randomNumber ===0) {
    result.innerHTML =  "<h2>" + "You've got It! Congratulations!" + "</h2>";

  } 
}


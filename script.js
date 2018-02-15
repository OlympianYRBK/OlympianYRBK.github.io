$('.shapeframe').tilt({
    perspective:    1000,
    glare: true,
    scale: 1.05
});
function randPhrase() {
  var randPhraseValue = Math.floor((Math.random() * 10) + 1);
  if (randPhraseValue === 1) {
    document.getElementById("clue").innerHTML = "It's time to go back. Way back. Back to when it all began.";
  } else if (randPhraseValue === 2) {
    document.getElementById("clue").innerHTML = "_____ Trojans, _____ Eagles";
  } else if (randPhraseValue === 3) {
    document.getElementById("clue").innerHTML = "Oh the _____ smell of Spring!";
  } else if (randPhraseValue === 4)  {
    document.getElementById("clue").innerHTML = "Milwaukee Tacos";
  } else if (randPhraseValue === 5) {
    document.getElementById("clue").innerHTML = "King. Queen. Princess. ?";
  } else if (randPhraseValue === 6) {
    document.getElementById("clue").innerHTML = "Duh da da da dah dah dah dah da da dah";
  } else if (randPhraseValue === 7) {
    document.getElementById("clue").innerHTML = "Only certain kids will remember this";
  } else if (randPhraseValue === 8) {
    document.getElementById("clue").innerHTML = "This dude has two kids";
  } else if (randPhraseValue === 9) {
    document.getElementById("clue").innerHTML = "______: to be warped or forced out of its natural shape. ______: the bad side of Stranger Things";
  } else if (randPhraseValue === 10) {
    document.getElementById("clue").innerHTML = "Everyone's got a story, but this one is pretty famous.";
  }
};

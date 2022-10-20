function playButton() {
  const playerName = prompt("Please enter username");
  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();

  }
  setCookie("username", playerName, 1);
  let point = 0;
  const guessingGame = (range) => {
    const rndGuess = Math.floor(Math.random() * range) + 1;
    console.log(rndGuess);
    const guess = prompt(`Predict a number between 1 and ${range}`);
    const playerGuess = Number(guess);

    if (rndGuess === playerGuess) {
      point = point + 1;
      setCookie("point", point, 1);
      alert(`You won!, ${playerName}, You've scored ${point} point`);
      guessingGame(range + 1);
    } else {
      point = 0;
      alert("You lose!");
    }
  };
  guessingGame(2);
};
playButton();
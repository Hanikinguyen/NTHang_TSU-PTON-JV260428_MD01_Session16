function processConfirm(answer) {
  let result;

  if (answer === true) {
    result = "Excellent. We'll play a nice game of chess.";
  } else {
    result = "Maybe later then.";
  }

  return result;
}

let answer = confirm("Bạn có muốn chơi cờ không?");
let message = processConfirm(answer);

alert(message);
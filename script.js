const score = document.getElementById("score");
const numberOne = document.getElementById("number1");
const numberTwo = document.getElementById("number2");
const input = document.getElementById("input");
const answer = document.getElementById("answer");
const containerAnswer = document.getElementById("containerAnswer");

const value1 = Math.ceil(Math.random() * 100);
const value2 = Math.ceil(Math.random() * 10);

const result = value2 * value1;

numberOne.innerHTML = value1;
numberTwo.innerHTML = value2;

let point = localStorage.getItem("result");

if (!point) {
  let point = 0;
}
console.log(point);

containerAnswer.addEventListener("click", () => {
  const answer = parseInt(input.value);

  if (answer == result) {
    console.log("benar");
    point++;
    localStorage.setItem("result", point);
    location.reload();
  } else {
    point--;
    localStorage.setItem("result", point);
    location.reload();
  }
});

score.innerHTML = localStorage.getItem("result");

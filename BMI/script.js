function bmi() {
  let heightelement = document.querySelector("#height").value;
  let heightinm = heightelement / 100;
  let weightelement = document.querySelector("#weight").value;
  let result = weightelement / (heightinm * heightinm);
  result = Math.round(result * 100) / 100;
  document.querySelector(".display").innerHTML = "BMI Result: " + result;
}

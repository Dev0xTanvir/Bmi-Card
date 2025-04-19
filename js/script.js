document.querySelector(".test").addEventListener("click", function () {
  const heightInput = document.querySelector(".height");
  const weightInput = document.querySelector(".weight");
  const resultText = document.querySelector(".result");
  const messageText = document.querySelector(".massage");
  const heightError = document.querySelector(".height_error");
  const weightError = document.querySelector(".weight_error");

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  heightError.textContent = "";
  weightError.textContent = "";
  resultText.textContent = "";
  messageText.textContent = "";

  if (!height || height <= 0) {
    heightError.textContent = "Please enter a valid height.";
    return;
  }

  if (!weight || weight <= 0) {
    weightError.textContent = "Please enter a valid weight.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / heightInMeters ** 2).toFixed(2);
  resultText.textContent = `Your BMI is ${bmi}`;

  if (bmi < 18.5) {
    messageText.textContent = "You are underweight.";
  } else if (bmi < 24.9) {
    messageText.textContent = "You have a normal weight.";
  } else if (bmi < 29.9) {
    messageText.textContent = "You are overweight.";
  } else {
    messageText.textContent = "You are obese.";
  }
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".height").value = "";
  document.querySelector(".weight").value = "";
  document.querySelector(".result").textContent = "";
  document.querySelector(".massage").textContent = "";
  document.querySelector(".height_error").textContent = "";
  document.querySelector(".weight_error").textContent = "";
});

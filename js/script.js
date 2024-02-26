const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const emptyInput = document.createElement("span");
const warningParagraph = document.getElementById("alert");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function toggleOptionSelection(option) {
  option.classList.toggle("selected");
  if (option.classList.contains("selected")) {
    option.style.color = "#E5E7EB";
    option.style.backgroundColor = "#652CD1";
  } else {
    option.style.color = "";
    option.style.backgroundColor = "";
  }
}

const stepTwoOptions = document.querySelectorAll(".step-two-btn");

stepTwoOptions.forEach((option) => {
  option.addEventListener("click", () => {
    toggleOptionSelection(option);
  });
});

function summaryUser() {
  document.getElementById("summary-emailName").textContent = nameInput.value;
  document.getElementById("summary-email").textContent = emailInput.value;
}

function addDots(step) {
  const stepNumber = document.getElementById("step-number");

  stepNumber.textContent = step;

  for (let i = 1; i <= step; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) {
      dot.classList.add("active");
    }
  }
}
 const currentStep = "translateX(-1000%)";
;
function changeContent(step) {
  // Translate the current step out of the screen
  document.querySelector(`.step-${step}`).style.transform = currentStep;

  // Translate the next step into the screen
  const nextStep = step + 1;
  document.querySelector(`.step-${nextStep}`).style.transform =
    "translateX(0%)";

  // Update the step number in the dots
  document.getElementById("step-number").textContent = nextStep;
}

document.getElementById("btn-submit").addEventListener("click", (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === "" && emailInput.value.trim() === "") {
    return (emptyInput.textContent = "Fill the fields above please");
  } else if (nameInput.value && emailInput.value.trim() === "") {
    return (emptyInput.textContent = "Fill the empty field");
  } else if (nameInput.value.trim() === "" && emailInput.value) {
    return (emptyInput.textContent = "Fill the empty field");
  } else if (!validateEmail(emailInput.value)) {
    return (emptyInput.textContent = "Invalid email format");
  } else {
    changeContent(1);
    summaryUser();
  }
});

warningParagraph.textContent = "";
warningParagraph.appendChild(emptyInput);
warningParagraph.style.display = "block";

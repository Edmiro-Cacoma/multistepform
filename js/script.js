const emptyInput = document.createElement("span");
const warningParagraph = document.getElementById("alert");
const steps = document.querySelectorAll(".step");
const nextBtn = document.querySelector("#nextBtn");
let currentStep = 0;

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function addDots() {
  const stepNumberElement = document.querySelector("#step-number");
  const stepDots = document.querySelectorAll(".dot");

  const updatedStepNumber = currentStep + 1;
  stepNumberElement.textContent = `${updatedStepNumber}`;

  stepDots[currentStep].classList.add("activeDot");
}

function updateContent() {
  const summaryName = document.getElementById("summary-emailName");
  const summaryEmail = document.getElementById("summary-email");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if (currentStep === 1) {
    const stepTwoBtn = document.querySelectorAll(".step-two-option");
    const summaryList = document.querySelector(".summaryUl");

    stepTwoBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        const buttonContent = btn.textContent;

        const listItem = document.createElement("li");
        listItem.textContent = buttonContent;
        summaryList.appendChild(listItem);
      });
    });
  } else if (currentStep === 2) {
    summaryName.textContent = nameInput.value;
    summaryEmail.textContent = emailInput.value;
  }

  addDots();
}

function handleNextStep() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if (nameInput.value.trim() === "" && emailInput.value.trim() === "") {
    warningParagraph.textContent = "Fill the fields above please";
    warningParagraph.style.display = "block";
    return;
  } else if (nameInput.value && emailInput.value.trim() === "") {
    warningParagraph.textContent = "Fill the empty field";
    warningParagraph.style.display = "block";
    return;
  } else if (nameInput.value.trim() === "" && emailInput.value) {
    warningParagraph.textContent = "Fill the empty field";
    warningParagraph.style.display = "block";
    return;
  } else if (!validateEmail(emailInput.value)) {
    warningParagraph.textContent = "Invalid email format";
    warningParagraph.style.display = "block";
    return;
  }

  warningParagraph.textContent = "";

  steps[currentStep].style.display = "none";
  currentStep++;
  steps[currentStep].style.display = "block";

  if (currentStep === steps.length - 1) {
    nextBtn.style.display = "none";
  }

  updateContent();
}

warningParagraph.textContent = "";
warningParagraph.appendChild(emptyInput);
warningParagraph.style.display = "none";
nextBtn.addEventListener("click", handleNextStep);

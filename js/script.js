const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const emptyInput = document.createElement("span");
const warningParagraph = document.getElementById("alert");


document.getElementById("btn-submit").addEventListener("click", (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === "" && emailInput.value.trim() === "") {
    return (emptyInput.textContent = "Fill the fields above please");
  } else if (nameInput.value && emailInput.value.trim() === "") {
    return (emptyInput.textContent = "Fill the empty field");
  } else if (nameInput.value.trim() === "" && emailInput.value) {
    return (emptyInput.textContent = "Fill the empty field");
  } else {
    return;
  }
});

 warningParagraph.textContent = ""; // Clear any previous messages
 warningParagraph.appendChild(emptyInput); // Display the message
 warningParagraph.style.display = "block";

 
    



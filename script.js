const allNumbers = document.querySelectorAll("#rating-scale button");
const submitButton = document.getElementById("submit-button");
const ratingContainer = document.getElementById("rating-container");
const feedbackSection = document.getElementById("feedback-container");
const selectionMsg = document.getElementById("selection-msg");

let rate = "";
//state example
submitButton.disabled = true;

allNumbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeAllClasses();
    rate = e.target.textContent;
    e.target.classList.add("checked");
    submitButton.disabled = false;
  });
});

function removeAllClasses() {
  allNumbers.forEach((btn) => {
    btn.classList.remove("checked");
  });
}

function submitButtonClick() {
  selectionMsg.textContent = `You selected ${rate} out of 5`;
  ratingContainer.classList.add("hidden");
  feedbackSection.classList.remove("feedback-container");
}

submitButton.addEventListener("click", submitButtonClick);

let circles = document.querySelectorAll(".circle");
let selectedNumber = 0;
const submitButton = document.querySelector('button[type = "submit"]');

circles.forEach((circle) =>
  circle.addEventListener("click", function (event) {
    selectedNumber = event.target.textContent;

    circles.forEach((circle) => circle.classList.remove("active-number"));
    event.target.classList.add("active-number");
  })
);

submitButton.addEventListener("click", function (event) {
  if (selectedNumber > 0) {
    redirectLink.href = `confirmation.html?number=${selectedNumber}`;

    let rating = document.querySelector(".rating");
    rating.textContent = selectedNumber;
  } else {
    if (!document.querySelector(".error")) {
      const err = document.createElement("div");
      const submitDiv = document.querySelector(".submit");
      err.classList.add("error");
      err.textContent = "Please select a rating";

      submitDiv.appendChild(err);
    }

    event.preventDefault();
  }
});

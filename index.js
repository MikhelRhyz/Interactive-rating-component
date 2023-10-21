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

submitButton.addEventListener("click", function(){
  redirectLink.href = `confirmation.html?number=${selectedNumber}`;

  let rating = document.querySelector(".rating");
  rating.textContent = selectedNumber;
});

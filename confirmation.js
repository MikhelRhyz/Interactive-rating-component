const urlParams = new URLSearchParams(window.location.search);
const number = urlParams.get("number");

if(number){
    const ratingElement = document.querySelector(".rating");
    ratingElement.textContent = number;
}
const rateContainer = document.querySelector(".rating-container");
const thanksContainer = document.querySelector(".thanks-container");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    rateContainer.style.display = "none";
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})
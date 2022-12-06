const popup = document.querySelectorAll(".popup");


const card = document.querySelector(".card");
const overlay = document.querySelector(".overlay");
const closeCardBtn = document.querySelector(".btn-close");

// close modal function
const closeCard = function () {
  card.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeCardBtn.addEventListener("click", closeCard);
overlay.addEventListener("click", closeCard);


// open modal function
const openCard = function () {
  card.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// open card
const product_1 = popup[0].addEventListener("click",openCard)
const product_2 = popup[1].addEventListener("click",() => console.log("Popup-2 clicked"))
const product_3 = popup[2].addEventListener("click",() => console.log("Popup-3 clicked"))
const product_4 = popup[3].addEventListener("click",() => console.log("Popup-4 clicked"))
const product_5 = popup[4].addEventListener("click",() => console.log("Popup-5 clicked"))
const product_6 = popup[5].addEventListener("click",() => console.log("Popup-6 clicked"))




const popup = document.querySelectorAll(".popup");

const card = document.querySelector(".card");
const overlay = document.querySelector(".overlay");
const closeCardBtn = document.querySelector(".btn-close");

// close cards function
const closeCard = function () {
  card.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the cards when the close button and overlay is clicked
closeCardBtn.addEventListener("click", closeCard);
overlay.addEventListener("click", closeCard);

// open cards function
const openCard = function (number) {
  card.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector('#title').innerHTML = 'Product ' + number;
};

// open card
const product_1 = popup[0].addEventListener("click", openCard.bind( this, 1 ));
const product_2 = popup[1].addEventListener("click", openCard.bind( this, 2 ));
const product_3 = popup[2].addEventListener("click", openCard.bind( this, 3 ));
const product_4 = popup[3].addEventListener("click", openCard.bind( this, 4 ));
const product_5 = popup[4].addEventListener("click", openCard.bind( this, 5 ));
const product_6 = popup[5].addEventListener("click", openCard.bind( this, 6 ));

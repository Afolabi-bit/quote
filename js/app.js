var quoteContainer = document.querySelectorAll(".quote-wrapper");
var previousBtn = document.querySelector("#previous");
var nextBtn = document.querySelector("#next");
var screen = document.querySelector("#screen");
var images = document.querySelectorAll("img");
var tempPrevQuote = [];
var tempPrevImage = [];
var prevQuote = [];
var prevImage = [];
var prev;
var previous;
var length;

//*********************NEXT BUTTON
nextBtn.addEventListener("click", () => {
  // console.log(quoteContainer.length);
  quoteContainer.forEach((item) => {
    item.classList.remove("show");
  });
  images.forEach((item) => {
    item.classList.remove("background");
  });
  //Select random Image//
  let randomImg = Math.floor(Math.random() * 83 + 1);
  let backgroundImg = images[randomImg].classList.add("background");
  //Select random Quote//
  let random = Math.floor(Math.random() * 263 + 1);

  let display = quoteContainer[random].classList.add("show");
  tempPrevQuote.push(random);
  console.log(tempPrevQuote);
});

//***********************PREVIOUS BUTTON
previousBtn.addEventListener("click", () => {
  images.forEach((item) => {
    item.classList.remove("background");
  });
  quoteContainer.forEach((item) => {
    item.classList.remove("show");
  });
  if (prevQuote == undefined) {
    //Select random Quote//
    let random = Math.floor(Math.random() * 263 + 1);
    let display = quoteContainer[random].classList.add("show");
  } else {
    prev = tempPrevQuote;
    length = prev.length;
    lengthM = length - 1;
    console.log(prev);
    console.log(length--);
    console.log(lengthM);
    console.log(prev[lengthM]);
  }
  //Select random Image//
  let randomImg = Math.floor(Math.random() * 84);
  let backgroundImg = images[randomImg].classList.add("background");
});

var date = document.querySelector("#date");

date.innerHTML = Date();

// NAVBAR
var main = document.querySelector("#main");
var content = document.querySelector("#main-content");
var navbar = document.querySelector("#toggle-btn");
navbar.addEventListener("click", () => {
  main.classList.toggle("toggle");
});
content.addEventListener("click", () => {
  main.classList.remove("toggle");
});

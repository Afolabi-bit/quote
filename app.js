var quoteContainer = document.querySelectorAll(".quote-wrapper");
var previousBtn = document.querySelector("#previous");
var nextBtn = document.querySelector("#next");
var screen = document.querySelector("#screen");
var images = document.querySelectorAll("img");
var tempPrevQuote = [];
var prevQuote = [];
var prev;
var tempPrevImg = [];
var prevImg = [];
var PImg;

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
  tempPrevImg.push(randomImg);

  //Select random Quote//

  let random = Math.floor(Math.random() * 263 + 1);

  let display = quoteContainer[random].classList.add("show");
  tempPrevQuote.push(random);
});

//***********************PREVIOUS BUTTON
previousBtn.addEventListener("click", () => {
  images.forEach((item) => {
    item.classList.remove("background");
  });

  quoteContainer.forEach((item) => {
    item.classList.remove("show");
  });

  prevQuote = tempPrevQuote;
  prev = prevQuote.pop();

  if (prevQuote == undefined) {
    //Select random Quote//
    let random = Math.floor(Math.random() * 263 + 1);
    let display = quoteContainer[random].classList.add("show");
  } else if (prev == undefined) {
    let random = Math.floor(Math.random() * 263 + 1);
    let display = quoteContainer[random].classList.add("show");
  } else {
    quoteContainer[prev].classList.add("show");
  }

  //Select random Image//

  prevImg = tempPrevImg;
  PImg = prevImg.pop();
  if (prevImg == undefined) {
    let randomImg = Math.floor(Math.random() * 84);
    let backgroundImg = images[randomImg].classList.add("background");
  } else if (PImg == undefined) {
    let randomImg = Math.floor(Math.random() * 84);
    let backgroundImg = images[randomImg].classList.add("background");
  } else {
    images[PImg].classList.add("background");
  }
});

var date = document.querySelector("#date");

date.innerHTML = new Date();

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

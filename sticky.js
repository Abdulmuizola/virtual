"use strict";

// const hero = document.querySelector('.hero')

// const observer = new IntersectionObserver (
//     function(int) {
//         const inter =  int[0]
//         if ( inter.isIntersecting === false) {
//         document.querySelector('.header').classList.remove('sticky')
//     } else {
//         console.log('one');
//         document.querySelector('.header').classList.add('sticky')
//     }
// })

// observer.observe(hero)

const modal = document.querySelector(".modal");
const openmodal = document.querySelector(".sign-in");
const closemodal = document.querySelector(".times");
const blurr = document.getElementById("blurr");
const overlay = document.querySelector(".overlay");

openmodal.addEventListener("click", function (e) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function (e) {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});
// overlay.addEventListener('click', function(e){
//     overlay.classList.remove('hidden')
// })

closemodal.addEventListener("click", function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  // console.log(e.key);
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
  // blur.classList.add('blur')
});

const navbarr = document.querySelector(".nav-bar");

const virtuall = document.querySelector(".virtual");

console.log(virtuall.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > virtuall.offsetTop) {
    navbarr.classList.add("activee");
  } else {
    navbarr.classList.remove("activee");
  }
});

const mobileOpen = document.querySelector(".icon-open");
const navOpen = document.querySelector(".nav-bar");
const mobileClose = document.querySelector(".icon-close");
const logoo = document.querySelector(".logo");
const list = document.querySelector(".nav-list");

mobileOpen.addEventListener("click", function (e) {
  console.log("ewa");
  e.preventDefault();
  mobileOpen.classList.add("hidden");
  navOpen.classList.add("nav-open");
  mobileClose.classList.remove("hidden");
  mobileClose.classList.add("top");
  list.style.display = "flex";
});

mobileClose.addEventListener("click", function (e) {
  e.preventDefault();
  mobileOpen.classList.remove("hidden");
  navOpen.classList.remove("nav-open");
  mobileClose.classList.add("hidden");
  mobileClose.classList.remove("top");
  list.style.display = "none";
});

const testimonyBox = document.querySelector(".btn-container");
const tests = document.querySelectorAll(".btn");
const testContent = document.querySelectorAll(".testimony-content");

testimonyBox.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.classList.contains("btn");

  if (!clicked) return;

  for (let i = 0; i < tests.length; i++) {
    tests[i].classList.remove("btn--active");
  }

  e.target.classList.add("btn--active");

  for (let i = 0; i < testContent.length; i++) {
    testContent[i].classList.remove("testimony--active");
  }

  const data = e.target.dataset.test;
  console.log(data);

  document
    .querySelector(`.testimony--${data}`)
    .classList.add("testimony--active");
});

const ratingls = document.querySelectorAll(".rating");
const btnEl = document.querySelector(".review");

const container = document.querySelector(".section--5");
const firstFeed = document.querySelector(".first-feed");
const rateContainer = document.querySelector(".rating-container");
const sad = document.querySelector(".rating--1");
const neutral = document.querySelector(".rating--2");
const happy = document.querySelector(".rating--3");
const rate = document.getElementsByClassName(".rating--active");

let feedbackRating = "";
  

rateContainer.addEventListener("click", function (e) {
  const clicked = e.target.classList.contains("rating");

  if (clicked) {
    feedbackRating = e.target.dataset.text;
    for (let i = 0; i < ratingls.length; i++) {
      ratingls[i].classList.remove("rating--active");
    }
    e.target.classList.add("rating--active");
  } else return;
});

btnEl.addEventListener("click", function (e) {
  if (feedbackRating !== "") {
    firstFeed.style.display = "none";
    container.innerHTML = `
  <div class="response">
  <h4 class="thank">Thank You!</h4>
  <p class="emoji">Feedback: ${feedbackRating}</p>
  <p class="advice">We'll use your feedback to improve our customer support.</p>
  </div>
  `;
  } else return;
});

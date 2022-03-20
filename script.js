const first = document.querySelector(".card__ratings-item:first-child");
const second = document.querySelector(".card__ratings-item:nth-child(2)");
const third = document.querySelector(".card__ratings-item:nth-child(3)");
const fourth = document.querySelector(".card__ratings-item:nth-child(4)");
const fifth = document.querySelector(".card__ratings-item:nth-child(5)");
const submit = document.querySelector(".card__submit");
const rating_text = document.querySelector(".card__back-ratings");
const inner = document.querySelector(".inner");

const stars = [first, second, third, fourth, fifth];

let selected = null;

first.addEventListener("click", () => setStars(1));
second.addEventListener("click", () => setStars(2));
third.addEventListener("click", () => setStars(3));
fourth.addEventListener("click", () => setStars(4));
fifth.addEventListener("click", () => setStars(5));

function setStars(number) {
  selected = number;
  rating_text.innerText = `You selected ${number} out of 5`;
  clearBackground();
  switch (number) {
    case 1:
      for (let i = 0; i < 1; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;

    case 2:
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;

    case 3:
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;

    case 4:
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;

    default:
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;
  }
}

function setBackground(element) {
  element.style.background = `var(--orange)`;
  element.style.color = `var(--white)`;
}

function clearBackground() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.background = `var(--medium-grey)`;
    stars[i].style.color = `var(--light-grey)`;
  }
}

submit.addEventListener("click", () => {
  if (selected) {
    inner.style.transform = `rotateY(180deg)`;
  } else {
    alert("Please select your rating");
  }
});

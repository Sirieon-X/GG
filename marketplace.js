// marketplace.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Marketplace page loaded!");
    // Future enhancements like dynamic service loading go here
});

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const cards = document.querySelectorAll('.carousel-card');

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 20; // Card width + margin
  const offset = -currentIndex * cardWidth;
  track.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

  
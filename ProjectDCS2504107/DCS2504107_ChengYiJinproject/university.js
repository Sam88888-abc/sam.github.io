function scrollRight() {
  document.getElementById('carousel').scrollBy({
    left: 320,
    behavior: 'smooth'
  });
}

// Touch swipe support
const carousel = document.getElementById('carousel');
let startX = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50) {
    scrollRight();
  } else if (diff < -50) {
    scrollLeft();
  }
});

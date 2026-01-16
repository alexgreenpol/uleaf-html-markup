// BURGER
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
  burger.classList.toggle("is-active");
});

// IMAGE CAROUSEL
const track = document.querySelector(".image-carousel__track");

if (track) {
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener("mouseleave", () => {
    isDown = false;
  });

  track.addEventListener("mouseup", () => {
    isDown = false;
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.2;
    track.scrollLeft = scrollLeft - walk;
  });

  let autoScroll = setInterval(() => {
    track.scrollLeft += 1;
  }, 30);

  track.addEventListener("mouseenter", () => {
    clearInterval(autoScroll);
  });

  track.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => {
      track.scrollLeft += 1;
    }, 30);
  });
}

// HEADER SCROLL

const nav = document.querySelector(".site-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
});

// loader section start here
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 5000);
});
// loader section end here

// view product section start here
const mainCarousel = document.querySelector("#mainCarousel");
const mainInstance = bootstrap.Carousel.getOrCreateInstance(mainCarousel);
const thumbs = document.querySelectorAll(".thumb");

function goToSlide(index) {
  mainInstance.to(index);
  setActiveThumb(index);
}

function setActiveThumb(index) {
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle("active-thumb", i === index);
  });
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    goToSlide(index);
  });
});

mainCarousel.addEventListener("slid.bs.carousel", (e) => {
  setActiveThumb(e.to);
});

// Initialize
setActiveThumb(0);
// view product section end here

AOS.init({
    duration: 800,
    once: true,
  });
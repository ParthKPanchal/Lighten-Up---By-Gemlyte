document.querySelectorAll(".color-switch").forEach((circle) => {
  circle.addEventListener("click", function (e) {
    e.preventDefault();

    // Carousel images
    const img1 = this.getAttribute("data-img1");
    const img2 = this.getAttribute("data-img2");
    const img3 = this.getAttribute("data-img3");

    // Thumbnail images
    const thumb1 = this.getAttribute("data-thumb1");
    const thumb2 = this.getAttribute("data-thumb2");
    const thumb3 = this.getAttribute("data-thumb3");

    // Update carousel
    document.getElementById("carousel-img1").src = img1;
    document.getElementById("carousel-img2").src = img2;
    document.getElementById("carousel-img3").src = img3;

    // Update thumbnails
    document.getElementById("thumb-img1").src = thumb1;
    document.getElementById("thumb-img2").src = thumb2;
    document.getElementById("thumb-img3").src = thumb3;

    // Reset carousel to first slide
    const carousel = bootstrap.Carousel.getInstance(
      document.querySelector("#mainCarousel")
    );
    if (carousel) carousel.to(0);
  });
});

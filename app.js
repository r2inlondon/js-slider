document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    heightRatio: 0.5,
    type: "fade",
    rewind: true,
    autoplay: true,
  }).mount();
});

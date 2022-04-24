document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    // heightRatio is to crop the images
    heightRatio: 0.4,
    type: "fade",
    rewind: true,
    autoplay: true,
    breakpoints: {
      640: {
        heightRatio: 1.5,
        cover: true,
      },
    },
  }).mount();
});

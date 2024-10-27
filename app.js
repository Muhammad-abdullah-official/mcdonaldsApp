let moraleImg = document.querySelector(".moraleImg");
console.log(moraleImg);
const images = [
  "./assets/Chick-Mac-D.png",
  "./assets/Happy-Menu-24-D.png",
  "./assets/Azadi-McFizz-24-D.png",
  "./assets/Home-Slider-1.png",
  "./assets/Oreo-Shake-08-24-N-M.png",
  "./assets/Kiwi-Bliss-M.png",
  "./assets/Home-SLider-Mobile.png",
  "./assets/Pokemon2.png",
  "./assets/delivery-points-desktop-slider.png",
];

let currentIndex = 0;

function changeImage() {
  moraleImg.style.opacity = "0";

  setTimeout(() => {
    moraleImg.src = images[currentIndex];

    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    moraleImg.style.opacity = "1";
  }, 500);
}

setInterval(changeImage, 2500);

let orderPage = document.querySelector("#order");
orderPage.addEventListener("click", () => {
  window.location = "menu.html";
});

const images = document.querySelectorAll(".images-box img");
const indicators = document.querySelectorAll(".indicators span");

let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  images[index].style.display = "none";
  indicators[index].style.opacity = "40%";
  index++;
  if (index == images.length) {
    index = 0;
  }
  images[index].style.display = "block";
  indicators[index].style.opacity = "100%";
});

document.querySelector(".previous").addEventListener("click", () => {
  images[index].style.display = "none";
  indicators[index].style.opacity = "40%";

  index--;
  if (index == -1) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  indicators[index].style.opacity = "100%";
});

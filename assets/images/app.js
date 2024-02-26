const images = document.querySelectorAll(".images-box img");
const indicators = document.querySelectorAll(".indicators span");

let index = 0;
const next = () => {
  images[index].style.display = "none";
  indicators[index].style.opacity = "40%";
  index++;
  if (index == images.length) {
    index = 0;
  }
  images[index].style.display = "block";
  indicators[index].style.opacity = "100%";
};

document.querySelector(".next").addEventListener("click", next);

const previous = () => {
  images[index].style.display = "none";
  indicators[index].style.opacity = "40%";

  index--;
  if (index == -1) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  indicators[index].style.opacity = "100%";
};

document.querySelector(".previous").addEventListener("click", previous);
setInterval(
  next,

  5000
);

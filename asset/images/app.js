const images = document.querySelectorAll(".images-box img");
 let index = 0;
document.querySelector(".next").addEventListener("click",function() {
   
    images[index].style.display = "none";
    index++;
    images[index].style.display = "block";
});

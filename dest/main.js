//back to top
function backTotop() {
  let scrollTop = document.querySelector("html").scrollTop;
  if (scrollTop > 600) {
    document.querySelector(".back-to-top").style.display = "block";
  } else {
    document.querySelector(".back-to-top").style.display = "none";
  }
}
document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault(); //khong back len top khi click vao
  window.scrollBy({
    top: -document.body.offsetHeight, // truot len top cuc muot
    behavior: "smooth",
  });
  console.log("click");
});
document.querySelector(".backtotop").addEventListener("click", function (e) {
  e.preventDefault(); //khong back len top khi click vao
  window.scrollBy({
    top: -document.body.offsetHeight, // truot len top cuc muot
    behavior: "smooth",
  });
  console.log("click");
});
backTotop();
window.addEventListener("scroll", backTotop);

// menu scroll
let $slider = document.querySelector(".slider");
let $header = document.querySelector("header");
window.addEventListener("scroll", function () {
  let scrollTop = document.querySelector("html").scrollTop;
  if (scrollTop > $slider.offsetHeight - $header.offsetHeight) {
    $header.style.background = "black";
  } else {
    $header.style.background = "transparent";
  }
});

//silder
let sliderCurrent = 0;
let sliderNumber = document.querySelector(".slider .number");
$sliderItems = document.querySelectorAll(".slider__item");
document.querySelector(".slider .prev").addEventListener("click", function () {
  if (sliderCurrent > 0) {
    sliderCurrent--;
    $sliderItems[sliderCurrent].classList.remove("active");
    $sliderItems[sliderCurrent - 1].classList.add("active");
  }
  sliderNumber.innerHTML = (sliderCurrent + 1).toString().padStart("0", 2);
});
document.querySelector(".slider .next").addEventListener("click", function () {
  if (sliderCurrent < $sliderItems.length - 1) {
    sliderCurrent++;
    $sliderItems[sliderCurrent].classList.remove("active");
    $sliderItems[sliderCurrent + 1].classList.add("active");
  }
  sliderNumber.innerHTML = (sliderCurrent + 1).toString().padStart("0", 2);
});

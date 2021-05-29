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
let sliderItems = document.querySelectorAll(".slider__item");
let pre = document.querySelector(".slider .prev");
let next = document.querySelector(".slider .next");
let dotted = document.querySelectorAll(".dotted li");
function loadSlider(current, destination) {
  sliderItems[current].classList.remove("active");
  sliderItems[destination].classList.add("active");
  sliderCurrent = destination;
  changeDotted(current, destination);
}
function changeDotted(current, destination) {
  dotted[current].classList.remove("active");
  dotted[destination].classList.add("active");
  sliderNumber.innerHTML = (sliderCurrent + 1).toString().padStart(2, "0");
}
pre.addEventListener("click", function () {
  if (sliderCurrent > 0) {
    loadSlider(sliderCurrent, sliderCurrent - 1);
  }
});
next.addEventListener("click", function () {
  if (sliderCurrent < sliderItems.length - 1) {
    loadSlider(sliderCurrent, sliderCurrent + 1);
  }
});

dotted.forEach(function (item, index) {
  item.addEventListener("click", function () {
    loadSlider(sliderCurrent, index);
  });
});
// document.querySelector(".slider .next").addEventListener("click", function () {
//   if (sliderCurrent < $sliderItems.length - 1) {
//     $sliderItems[sliderCurrent].classList.remove("active");
//     $sliderItems[sliderCurrent + 1].classList.add("active");
//     sliderCurrent++;
//   }
//   if (sliderCurrent == $sliderItems.length - 1) {
//     $sliderItems[$sliderItems.length - 1].classList.remove("active");
//     $sliderItems[0].classList.add("active");
//   }
//   console.log($sliderItems[0]);
//   console.log(sliderCurrent);
//   sliderNumber.innerHTML = (sliderCurrent + 1).toString().padStart("0", 2);
// });

// function abc() {
//   //style dotted // style so
// }

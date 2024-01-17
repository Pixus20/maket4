document.querySelector(".menu_burger").addEventListener("click", function () {
  document.querySelector(".menu_nav").classList.toggle("open");
});
//form
var form = document.getElementById("registration_form");
var nameInput = document.getElementById("form_name");
var surnameInput = document.getElementById("form_surname");
var selectElement = document.getElementById("form_interes");
var numberInput = document.getElementById("form_number");
var emailInput = document.getElementById("form_email");
var checkboxInput = document.getElementById("Checkbox");
var submitBtn = document.querySelector(".form_button");
// submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Форма надіслана успішно!");
  form.reset();
});
// name input
nameInput.addEventListener("input", function (e) {
  var sanitizedValue = e.target.value.replace(/[^a-zA-Z\u0400-\u04FFёЁ']/g, "");
  sanitizedValue = sanitizedValue.slice(0, 20);
  e.target.value = sanitizedValue;
});
// surname input
surnameInput.addEventListener("input", function (e) {
  var sanitizedValue = e.target.value.replace(/[^a-zA-Z\u0400-\u04FFёЁ']/g, "");
  sanitizedValue = sanitizedValue.slice(0, 30);
  e.target.value = sanitizedValue;
});
// select input
selectElement.addEventListener("change", function () {
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;
});
//number
numberInput.addEventListener("input", function (e) {
  var sanitizedValue = e.target.value.replace(/[^0-9+]/g, "");
  sanitizedValue = sanitizedValue.slice(0, 13);
  e.target.value = sanitizedValue;
});
numberInput.addEventListener("focus", function (e) {
  if (!e.target.value.startsWith("+38")) {
    e.target.value = "+38" + e.target.value;
  }
});
numberInput.addEventListener("blur", function (e) {
  var inputValue = e.target.value;
  if (inputValue.length < 13) {
    alert("Введіть вірний номер!");
    numberInput.value = "";
  }
});
// email input
emailInput.addEventListener("blur", function (e) {
  var inputValue = e.target.value.trim();
  if (inputValue) {
    if (/[\u0400-\u04FF]/.test(inputValue)) {
      alert("Введення кирилиці заборонено!");
      e.target.value = "";
      return;
    }
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(inputValue)) {
      alert("Введіть правильний Email!");
      e.target.value = "";
    }
  } else {
    alert("Поле Email не може бути порожнім!");
  }
});
//slider second block
$(".content_development").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 851,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
  ],
});
//slider 4,6 block
$(".content_fourth_slider, .content_six_slider ").slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  fade: true,
  speed:1500,
  cssEase: "ease-in-out",
});
//menu scroll with height header
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("header a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      const headerHeight = document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: "smooth",
      });
    });
  });
});

document.querySelector(".menu_burger").addEventListener("click", function () {
  document.querySelector(".menu_nav").classList.toggle("open");
});

document.querySelector(".menu_list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    document.querySelectorAll(".menu_list li").forEach(function (el) {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});

var form = document.getElementById("registration_form");
var nameInput = document.getElementById("form_name");
var surnameInput = document.getElementById("form_surname");
var selectElement = document.getElementById("form_interes");
var numberInput = document.getElementById("form_number");
var emailInput = document.getElementById("form_email");
var checkboxInput = document.getElementById("Checkbox");
var submitBtn = document.querySelector(".form_button");

var formTitle1 = document.getElementById("form_title1");
var formTitle2 = document.getElementById("form_title2");
var formTitle3 = document.getElementById("form_title3");
var formTitle4 = document.getElementById("form_title4");
var formTitle5 = document.getElementById("form_title5");
var formTitle6 = document.getElementById("form_title6");

// submit form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var isNameValid = formTitle1.style.color === "black";
  var isSurnameValid = formTitle2.style.color === "black";
  var isSelectValid = formTitle3.style.color === "black";
  var isNumberValid = formTitle4.style.color === "black";
  var isEmailValid = formTitle5.style.color === "black";
  var isCheckboxValid = formTitle6.style.color === "black";

  if (isNameValid && isSurnameValid && isSelectValid && isNumberValid && isEmailValid && isCheckboxValid) {
    nameInput.value = "";
    surnameInput.value = "";
    selectElement.value = "";
    numberInput.value = "";
    emailInput.value = "";
    checkboxInput.checked = false;

    formTitle1.style.color = "";
    formTitle2.style.color = "";
    formTitle3.style.color = "";
    formTitle4.style.color = "";
    formTitle5.style.color = "";
    formTitle6.style.color = "";
    alert("Форма надіслана успішно!");
  } else {
      alert("Будь ласка, заповніть усі поля правильно!");      
    }
});

// name input
nameInput.addEventListener("input", function (e) {
  var sanitizedValue = e.target.value.replace(/[^a-zA-Z\u0400-\u04FFёЁ']/g, "");
  sanitizedValue = sanitizedValue.slice(0, 20);
  e.target.value = sanitizedValue;
  formTitle1.style.color = sanitizedValue.trim() !== "" ? "black" : "";
});

// surname input
surnameInput.addEventListener("input", function (e) {
  var sanitizedValue = e.target.value.replace(/[^a-zA-Z\u0400-\u04FFёЁ']/g, "");
  sanitizedValue = sanitizedValue.slice(0, 30);
  e.target.value = sanitizedValue;
  formTitle2.style.color = sanitizedValue.trim() !== "" ? "black" : "";
});

// select input
selectElement.addEventListener("change", function () {
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;
  formTitle3.style.color = selectedOption === "developer" || selectedOption === "QA" ? "black" : "";
});
//number
numberInput.addEventListener("input", function (e) {
  var sanitizedValue = e.target.value.replace(/[^0-9+]/g, "");
  sanitizedValue = sanitizedValue.slice(0, 13);
  e.target.value = sanitizedValue;
  if (sanitizedValue.length === 13) {
    formTitle4.style.color = "black";    
  } else {
    formTitle4.style.color = "red";
  }  
});

numberInput.addEventListener("focus", function (e) {
  if (!e.target.value.startsWith("+38")) {
    e.target.value = "+38" + e.target.value;
    formTitle4.style.color = "black";
  }
});

numberInput.addEventListener("blur", function (e) {
  var inputValue = e.target.value;
  if (inputValue.length !== 13) {
    formTitle4.style.color = "red";    
  }  
  if (inputValue.length < 13) {
    alert("Введіть вірний номер!");
    numberInput.value = "";
  }
});

// email input
emailInput.addEventListener("input", function (e) {
  var sanitizedValue = "";
  for (var i = 0; i < e.target.value.length; i++) {
    var char = e.target.value[i];
    if (i !== 0 || /[a-zA-Z0-9]/.test(char)) {
      sanitizedValue += char.replace(/[^a-zA-Z0-9._@-]/g, "");
    }
  }
  sanitizedValue = sanitizedValue.slice(0, 50);

  var emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9]+([.-]*[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(sanitizedValue)) {
    e.target.value = sanitizedValue;
    formTitle5.style.color = "black";
  } else {
    formTitle5.style.color = "";
  }
});

// checkbox input
checkboxInput.addEventListener("click", function () {
  formTitle6.style.color = checkboxInput.checked ? "black" : "";
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
//slider fourth block
$(".content_fourth_slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 10000,
  fade: true,
  cssEase: "easy-in-out",
});
//slider six block
$(".content_six_slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 10000,
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

window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((item) => new bootstrap.Tooltip(item));

// Use alert when you click button
const buttons = document.querySelectorAll(".add-to-cart-btn");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    alert("أضيف المُنتج إلى عربة الشراء");
  });
});

// Current Year
document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة للمتجر سنة" + " " + new Date().getFullYear();

// 
document.querySelectorAll('.size-option input[type="radio"]').forEach((item) => {
  item.addEventListener("change", () => {
    document.querySelectorAll(".size-option").forEach((i) => {
      i.classList.remove("active");
    });
    item.parentNode.parentNode.classList.add("active");
  });
});
document.querySelectorAll('.color-option input[type="radio"]').forEach((item) => {
  item.addEventListener("change", () => {
    document.querySelectorAll(".color-option").forEach((i) => {
      i.classList.remove("active");
    });
    item.parentNode.parentNode.classList.add("active");
  });
});

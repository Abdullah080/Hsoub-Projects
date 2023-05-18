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

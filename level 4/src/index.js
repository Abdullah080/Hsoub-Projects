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

// ---- Product ----
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

// ---- Checkout ----
document.querySelectorAll("[data-product-quantity]").forEach((item) => {
  item.addEventListener("change", () => {
    const newQuantity = item.value;
    const parent = item.closest("[data-product-info]");
    const pricePerUnit = parent.getAttribute("data-product-price");
    const totalPriceForProduct = pricePerUnit * newQuantity;
    parent.querySelector(".total-price-per-product").innerHTML = totalPriceForProduct + "$";

    // Total Price
    let totalPriceForAllProduct = 0;
    document.querySelectorAll("[data-product-info]").forEach((product) => {
      const pricePerUnit = product.getAttribute("data-product-price");
      const quantity = product.querySelector("[data-product-quantity]").value;
      const totalPriceForProduct = pricePerUnit * quantity;
      totalPriceForAllProduct += totalPriceForProduct;
    });
    document.getElementById("total-price-for-all-product").innerHTML = totalPriceForAllProduct + "$";
  });
});

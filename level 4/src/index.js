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
    calculateTotalPrice();
  });
});

function calculateTotalPrice() {
  let totalPriceForAllProduct = 0;
  document.querySelectorAll("[data-product-info]").forEach((product) => {
    const pricePerUnit = product.getAttribute("data-product-price");
    const quantity = product.querySelector("[data-product-quantity]").value;
    const totalPriceForProduct = pricePerUnit * quantity;
    totalPriceForAllProduct += totalPriceForProduct;
  });
  document.getElementById("total-price-for-all-product").innerHTML = totalPriceForAllProduct + "$";
}

// Remove When click
document.querySelectorAll("[data-remove-from-card]").forEach((item) => {
  item.addEventListener("click", () => {
    item.closest("[data-product-info]").remove();

    // Total Price
    calculateTotalPrice();
  });
});

// ---- Payment ----
const citiesByCountry = {
  sa: ["جدة", "رياض"],
  eg: ["القاهرة", "الاسكندرية"],
  jo: ["عمان", "الزرقاء"],
  sy: ["دمشق", "حلب"],
};
document.querySelectorAll("select[name='country']").forEach((item) => {
  item.addEventListener("change", () => {
    const country = item.value;

    const cities = citiesByCountry[country];

    document.querySelectorAll("#paymentcities option").forEach((option) => option.remove());

    const firstOption = document.createElement("option");
    const optionText = document.createTextNode("اختر المدينة");
    firstOption.appendChild(optionText);
    firstOption.setAttribute("value", "");
    firstOption.setAttribute("disabled", "true");
    firstOption.setAttribute("selected", "true");

    const cityOptions = document.getElementById("paymentcities");
    cityOptions.appendChild(firstOption);

    cities.forEach((city) => {
      const newOption = document.createElement("option");
      const optionText = document.createTextNode(city);
      newOption.appendChild(optionText);
      newOption.setAttribute("value", city);
      cityOptions.appendChild(newOption);
    });
  });
});

// Remove When click
let paymentMethod = document.querySelectorAll("form [name='payment-method']");
let creditCardInfoinfo = document.getElementById("credit_card_info");

paymentMethod.forEach(radioButton => {
  radioButton.addEventListener("change", () => {
    if (paymentMethod[1].checked) {
      creditCardInfoinfo.style.display = "none";
    } else {
      creditCardInfoinfo.style.display = "flex";
    }
  });
});


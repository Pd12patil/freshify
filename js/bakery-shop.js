const decrementButton = document.querySelector(".quantity button:first-of-type");
const incrementButton = document.querySelector(".quantity button:last-of-type");
const quantityInput = document.querySelector("#quantity");
const priceElement = document.querySelector("#price");
const subtotalElement = document.querySelector(".subtotal");

const pricePerItem = parseFloat(priceElement.getAttribute("data-price"));

function updateSubtotal() {
  const quantity = parseInt(quantityInput.value);
  const subtotal = quantity * pricePerItem;
  subtotalElement.textContent = `Total: Rs. ${subtotal.toFixed(2)}`;
}

decrementButton.addEventListener("click", () => {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = --currentQuantity;
    updateSubtotal();
  }
});

incrementButton.addEventListener("click", () => {
  let currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = ++currentQuantity;
  updateSubtotal();
});

quantityInput.addEventListener("input", () => {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity < 1) {
    quantityInput.value = 1;
    currentQuantity = 1;
  }
  updateSubtotal();
});

updateSubtotal();

function changeimg(imgname) {
  const mainimg = document.getElementById("mainimg");
  mainimg.src = imgname;
}

function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  const isVisible = sidebar.style.display === "block";
  sidebar.style.display = isVisible ? "none" : "block";
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const isVisible = sidebar.style.display === "block";
  sidebar.style.display = isVisible ? "none" : "block";
}

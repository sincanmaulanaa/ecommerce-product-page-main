const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
let count = 0;

plus.addEventListener("click", function () {
  count += 1;
  document.getElementById("count").innerText = count;
  if (count > 0) {
    minus.disabled = false;
  }
});

minus.addEventListener("click", function () {
  count -= 1;
  document.getElementById("count").innerText = count;
  if (count === 0) {
    minus.disabled = true;
  }
});

document.getElementById("btnCart").addEventListener("click", function () {
  const cartCount = document.getElementById("cartCount");
  cartCount.innerText = document.getElementById("count").innerText;

  const notEmptyState = document.getElementById("notEmptyState");
  const emptyState = document.getElementById("emptyState");
  notEmptyState.hidden = false;
  emptyState.hidden = true;
  emptyState.classList.remove("p-16", "flex", "justify-center");

  const count = document.getElementById("count");
  if (count.innerText === "0") {
    notEmptyState.hidden = true;
    emptyState.hidden = false;
    emptyState.classList.add("p-16", "flex", "justify-center");
  }

  const cartItemTotal = document.getElementById("cartItemTotal");
  cartItemTotal.innerText = count.innerText;
  const cartPriceTotal = document.getElementById("cartPriceTotal");
  parseInt(cartItemTotal);

  let totalPrice = cartItemTotal.innerText * 125;
  cartPriceTotal.innerText = totalPrice;
});

document
  .getElementById("deleteCartItem")
  .addEventListener("click", function () {
    const notEmptyState = document.getElementById("notEmptyState");
    notEmptyState.hidden = true;

    const emptyState = document.getElementById("emptyState");
    emptyState.hidden = false;
    emptyState.classList.add("p-16", "flex", "justify-center");

    const cartCount = document.getElementById("cartCount");
    cartCount.innerText = 0;
  });

document.getElementById("cart").addEventListener("click", function () {
  const cartState = document.getElementById("cartState");
  if (cartState.hidden) {
    cartState.removeAttribute("hidden");
  } else {
    cartState.hidden = true;
  }

  cartState.classList.add(
    "transition",
    "ease-in-out",
    "hover:-translate-y-1",
    "hover:scale-105",
    "duration-300"
  );
});

document.getElementById("burgerMenu").addEventListener("click", function () {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.remove("hidden");
});

document
  .getElementById("closeMobileNav")
  .addEventListener("click", function () {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.add("hidden");
  });

document.getElementById("product1").addEventListener("click", function () {
  const heroImage = document.getElementById("heroImage");
  heroImage.setAttribute("src", "public/assets/images/image-product-1.jpg");
  heroImage.classList.add("mySlides");
});

document.getElementById("product2").addEventListener("click", function () {
  const heroImage = document.getElementById("heroImage");
  heroImage.setAttribute("src", "public/assets/images/image-product-2.jpg");
  heroImage.classList.add("mySlides");
});

document.getElementById("product3").addEventListener("click", function () {
  const heroImage = document.getElementById("heroImage");
  heroImage.setAttribute("src", "public/assets/images/image-product-3.jpg");
  heroImage.classList.add("mySlides");
});

document.getElementById("product4").addEventListener("click", function () {
  const heroImage = document.getElementById("heroImage");
  heroImage.setAttribute("src", "public/assets/images/image-product-4.jpg");
  heroImage.classList.add("mySlides");
});

document.getElementById("closeModal").addEventListener("click", function () {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.classList.remove("flex");
  modalContainer.classList.add("hidden");
});

document.getElementById("heroImage").addEventListener("click", function () {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
});

document.getElementById("product1Modal").addEventListener("click", function () {
  const heroImageModal = document.getElementById("heroImageModal");
  heroImageModal.setAttribute(
    "src",
    "public/assets/images/image-product-1.jpg"
  );
});

document.getElementById("product2Modal").addEventListener("click", function () {
  const heroImageModal = document.getElementById("heroImageModal");
  heroImageModal.setAttribute(
    "src",
    "public/assets/images/image-product-2.jpg"
  );
});

document.getElementById("product3Modal").addEventListener("click", function () {
  const heroImageModal = document.getElementById("heroImageModal");
  heroImageModal.setAttribute(
    "src",
    "public/assets/images/image-product-3.jpg"
  );
});

document.getElementById("product4Modal").addEventListener("click", function () {
  const heroImageModal = document.getElementById("heroImageModal");
  heroImageModal.setAttribute(
    "src",
    "public/assets/images/image-product-4.jpg"
  );
});

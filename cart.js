let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartCount();
    // alert(${productName} added to cart.);
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
    const cartElement = document.getElementById("cart");
    cartElement.style.display = cartElement.style.display === "block" ? "none" : "block";
    renderCartItems();
}

function renderCartItems() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
    totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.productName} - $${item.price.toFixed(2)}
            <button class="btn btn-danger btn-sm ml-2" onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById("total-price").innerText = '$${totalPrice.toFixed(2)'};


function removeItem(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCartItems();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    document.getElementById("payment-modal").style.display = "block";
    document.getElementById("payment-amount").value = '$${totalPrice.toFixed(2)'};


function closePaymentModal() {
    document.getElementById("payment-modal").style.display = "none";
}

function applyDiscount() {
    const discountCode = document.getElementById("discount-code").value;
    if (discountCode === "DISCOUNT10") {
        totalPrice *= 0.9;
        document.getElementById("payment-amount").value = '$${totalPrice.toFixed(2)}';
        alert("10% discount applied!");
    } else {
        alert("Invalid discount code.");
    }
}

function processPayment() {
    alert('Payment of $${totalPrice.toFixed(2)} processed successfully! Thank you for your purchase.');
    cart = [];
    updateCartCount();
    renderCartItems();
    closePaymentModal();
}
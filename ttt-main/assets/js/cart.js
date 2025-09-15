// cart.js

// بيانات المنتجات
const cartItemsData = [
    { title: "item1", qty: 1, price: 1, img: "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg" },
    { title: "item2", qty: 1, price: 3, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },
    { title: "item3", qty: 1, price: 5, img: "https://images.pexels.com/photos/3651674/pexels-photo-3651674.jpeg" },
    { title: "item4", qty: 1, price: 4, img: "https://images.pexels.com/photos/3651674/pexels-photo-3651674.jpeg" }
  ];

  // لدروب داون الهيدر
  function renderMiniCart() {
    const cartDropdown = document.getElementById("cart-dropdown");
    const cartItemsContainer = cartDropdown.querySelector(".cart-items");
    const cartCount = document.querySelector(".cart-count");
    const cartItemsCount = cartDropdown.querySelector(".cart-items-count");
    const subtotalElement = cartDropdown.querySelector(".subtotal strong");
  
    let subtotal = 0;
    cartItemsContainer.innerHTML = "";
  
    cartItemsData.forEach(item => {
      subtotal += item.price * item.qty;
  
      const itemEl = document.createElement("a");
      itemEl.href = "cart.html";
      itemEl.className = "cart-item d-flex align-items-center text-decoration-none";
      itemEl.innerHTML = `
        <img src="${item.img}" alt="${item.title}" width="60" height="60">
        <div class="cart-item-info ms-2">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-meta">Qty: ${item.qty} · <span class="text-muted small">$${item.price.toFixed(2)}</span></div>
        </div>
        <div class="cart-item-price ms-auto"><strong>$${(item.price * item.qty).toFixed(2)}</strong></div>
      `;
  
      cartItemsContainer.appendChild(itemEl);
    });
  
    cartCount.textContent = cartItemsData.length;
    cartItemsCount.textContent = `${cartItemsData.length} items`;
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  }
  
  // لصفحة cart.html
  function renderCartPage() {
    const cartPageContainer = document.getElementById('cart-page-items');
    const cartTotalElement = document.getElementById('cart-total');
    if (!cartPageContainer || !cartTotalElement) return;
  
    let total = 0;
    cartPageContainer.innerHTML = '';
  
    cartItemsData.forEach((item, index) => {
      total += item.price * item.qty;
  
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-page-item d-flex align-items-center mb-3';
      itemEl.innerHTML = `
        <img src="${item.img}" alt="${item.title}" width="80" height="80">
        <div class="ms-3">
          <h5>${item.title}</h5>
          <p>
            Qty: <input type="number" min="1" value="${item.qty}" class="qty-input" data-index="${index}" style="width:60px;"> 
            · $${item.price.toFixed(2)} each
          </p>
        </div>
        <div class="ms-auto">
          <strong>$${(item.price * item.qty).toFixed(2)}</strong>
          <button class="btn btn-sm btn-danger ms-2 remove-item" data-index="${index}">Remove</button>
        </div>
      `;
      cartPageContainer.appendChild(itemEl);
    });
  
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  
    // تعديل الكمية
    cartPageContainer.querySelectorAll('.qty-input').forEach(input => {
      input.addEventListener('change', e => {
        const idx = e.target.dataset.index;
        const newQty = parseInt(e.target.value);
        if (newQty > 0) {
          cartItemsData[idx].qty = newQty;
          renderCartPage();
          renderMiniCart();
        }
      });
    });
  
    // إزالة المنتج
    cartPageContainer.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', e => {
        const idx = e.target.dataset.index;
        cartItemsData.splice(idx, 1);
        renderCartPage();
        renderMiniCart();
      });
    });
  }
  
  // استدعاء الدوال عند تحميل الصفحة
  document.addEventListener('DOMContentLoaded', function () {
    renderMiniCart();
    if (document.getElementById('cart-page-items')) {
      renderCartPage();
    }
  });
  
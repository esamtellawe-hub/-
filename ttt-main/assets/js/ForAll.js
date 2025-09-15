// ForAll.js

document.addEventListener('DOMContentLoaded', function () {
    const headerHTML = `
      <header id="header" class="header sticky-top">
        <div class="topbar container-fluid d-flex justify-content-between align-items-center">
          <div class="lang-switch">
            <a href="#" class="lang">AR</a> | <a href="#" class="lang">EN</a>
          </div>
          <div class="logo text-center">
            <a href="index.html"><h1 class="sitename">badilne</h1></a>
          </div>
          <div class="icons d-flex align-items-center position-relative">
            <a href="#" id="cart-icon" class="icon d-flex align-items-center">
              <i class="bi bi-cart"></i>
              <span class="cart-count">0</span>
            </a>
            <div id="cart-dropdown" class="cart-dropdown">
              <div class="cart-header px-3 py-2 border-bottom d-flex align-items-center justify-content-between">
                <strong>My Cart</strong>
                <small class="text-muted cart-items-count">0 items</small>
              </div>
              <div class="cart-items p-2"></div>
              <div class="cart-footer px-3 py-2 border-top d-flex align-items-center">
                <div class="subtotal">Subtotal: <strong>$0.00</strong></div>
                <a href="cart.html" class="btn btn-sm btn-primary ms-auto">Go to Cart</a>
              </div>
            </div>
            <a href="Profile.html" class="icon ms-3"><i class="bi bi-person"></i></a>
            <a href="#" class="icon ms-2"><i class="bi bi-heart"></i></a>
          </div>
        </div>
  
        <div class="main-nav container-fluid d-flex align-items-center">
          <nav id="navmenu" class="navmenu mx-auto">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="swap.html">Swap</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li class="dropdown">
                <a href="about.html"><span>About</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="team.html">Team</a></li>
                </ul>
              </li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    `;
  
    const footerHTML = `
      <footer id="footer" class="footer dark-background">
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
              <a href="index.html" class="logo d-flex align-items-center">
                <span class="sitename">BADILNE</span>
              </a>
              <div class="footer-contact pt-3">
                <p class="mt-3"><strong>Phone:</strong> <span>+962 788 360 267</span></p>
                <p><strong>Email:</strong> <span>janaibrahim39@gmail.com</span></p>
              </div>
              <div class="social-links d-flex mt-4">
                <a href="https://www.instagram.com/jana_ibrahim02/"><i class="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/janaibrahi/"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
  
            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="team.html">Team</a></li>
              </ul>
            </div>
          </div>
          <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">Jame</strong> <span>All Rights Reserved</span></p>
          </div>
        </div>
      </footer>
    `;
  
    // إدراج الهيدر والفوتر
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
  
    // تحديد الصفحة الحالية وإضافة active
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('#navmenu a').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  
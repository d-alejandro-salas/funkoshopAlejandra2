document.addEventListener("DOMContentLoaded", function () {
  // Crear un enlace al archivo CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.type = 'text/css';
  cssLink.href = 'Styles/header-footer.css';

  // Agregar el enlace CSS al head del documento
  document.head.appendChild(cssLink);

  // Generar el header
  function generateHeader() {
    const header = document.createElement('header');
    header.id = "cabeceraUsuario";
    header.innerHTML = `
        <a href="index.html">
          <img  class="logoMenu" src="multimedia/branding/logo_light_horizontal.svg" alt="logo">
        </a>
        <div class="menuHeader">
          <nav class="navHeaderUsuario">
            <div class="menuHeader-link navbar__item with-submenu">
              <a class="navbar__link with-icon" href="shop.html">SHOP<iconify-icon icon="tabler:chevron-down"></iconify-icon></a>
              <ul class="submenu">
                <li class="submenu__item">
                  <a class="submenu__link" href="#">Funkos</a>
                </li>
                <li class="submenu__item">
                  <a class="submenu__link" href="#">Remeras</a>
                </li>
                <li class="submenu__item">
                  <a class="submenu__link" href="#">Llaveros</a>
                </li>
              </ul>
            </div>
            <a class="menuHeader-link navbar__link" href="#">CONTACTO</a>
            <a class="menuHeader-link navbar__link" href="admin/login.html">LOGIN</a>
            <a class="menuHeader-link carritoDibujo" href="cart.html">
              <img src="multimedia/icons/cart-icon.svg" alt="carrito">
              <p id="cartBadge" class="noDisplay">0</p>
            </a>
          </nav>
        </div> 
    `;
    document.body.prepend(header);
  }

  // Generar el footer
  function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="footerUsuario">
      <div class="navFooter">
        <a href="shop.html">SHOP</a>
        <a href="admin/login.html">INGRESAR</a>
        <a href="#">CONTACTO</a>
      </div>
      <div class="logoFooter">
        <img src="multimedia/branding/isotype.svg" alt="Logo Funkoshop">
      </div>
    </div>
    <p class="copy">All rights reserved 2023 - Funkoshop</p>
    `;
    document.body.appendChild(footer); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }

  // Generar el script final
  function generateScript() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js';
    document.body.appendChild(script); // Agregar el script al final del body
  }

  generateHeader();
  generateFooter();
  generateScript();

  if (window.location.href.includes("cart.html")) {
    const cartBadge = document.getElementById('cartBadge');
    cartBadge.className = "cartBadge";
}
});
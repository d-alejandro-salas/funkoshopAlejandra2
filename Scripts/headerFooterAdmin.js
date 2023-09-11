document.addEventListener("DOMContentLoaded", function () {
  // Crear un enlace al archivo CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.type = 'text/css';
  cssLink.href = '../Styles/header-footer.css';

  // Agregar el enlace CSS al head del documento
  document.head.appendChild(cssLink);

  // Genera el header
  function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="navbar container">
      <picture>
        <a href="../index.html">
          <img class="logoMenu" src="../multimedia/branding/logo_light_horizontal.svg" alt="logo">
        </a>
      </picture>
      <ul class="navbar__menu">
      <li><a class="navbar__link" href="../shop.html">VER TIENDA</a>
      </li><li><a class="navbar__link" href="admin.html">ADMIN</a>
      </li><li><a class="navbar__link" href="login.html">SALIR</a>
      </li></ul>
    </nav>
    `;
    document.body.prepend(header);
  }

  // Genera el footer
  function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <nav class="navbar container">
      <ul class="navbar__item"> 
        <li class="navbar__item">
          <a class="navbar__link" href="../shop.html">SHOP</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="register.html">REGISTRARSE</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="login.html">INGRESAR</a>
        </li>
        <li class="navbar__item">
          <a class="navbar__link" href="#">CONTACTO</a>
      </ul>
      <picture>
        <img src="../multimedia/branding/isotype.svg" alt="Logo Funkoshop">
      </picture>
    </nav>
    <p class="footerCopy">All rights reserved 2023 - Funkoshop</p>
    `;
    document.body.appendChild(footer); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }
  generateHeader();
  generateFooter();
});
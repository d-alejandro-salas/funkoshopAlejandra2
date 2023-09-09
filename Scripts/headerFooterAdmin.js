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
    <nav>
      <div class="cabeceraAdmin">
          <a href="index.html"><img  class="logoMenu" src="../multimedia/branding/logo_light_horizontal.svg" alt="logo"></a>
          <ul class="menuHeaderAdmin">
              <a href="../shop.html">VER TIENDA</a>
              <a href="admin.html">ADMIN</a>
              <a href="login.html">SALIR</a>
          </ul>
      </div>
    </nav>
    `;
    document.body.prepend(header);
  }

  // Genera el footer
  function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <a href="../shop.html">SHOP</a>
      <a href="#">REGISTRARSE</a>
      <a href="#">INGRESAR</a>
      <a href="#">CONTACTO</a>
      <img src="../multimedia/branding/isotype.svg" alt="Logo Funkoshop">
      <p class="copy">All rights reserved 2023 - Funkoshop</p>
    `;
    document.body.appendChild(footer); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }
  generateHeader();
  generateFooter();
});
(function(){
    var $body = document.querySelector("body");
    $body.classList.remove("no-js")
    $body.classList.add("js")

    // Hamburger menu

    new Menu({
        container: ".header__nav",      // O menu que vai abrir/fechar
        toogleBtn: ".header__btnMenu",  // O botão que abre/fecha
        WidthEnabled: 1024              // Largura máxima para ativar o comportamento mobile
      });

    // Carrosel

    var carouselimgs = new Carousel({
        container: ".laptop-slider .slideshow", // carrossel
        itens: "figure",    // As fotos que serão trocadas
        btnPrev: '.prev',   // Botão avançar
        btnNext: '.next'    // Botão retroceder
    }) 

    var carouselimgs = new Carousel({
        container: ".last-slideshow", // carrossel
        itens: 'figure',    // As fotos que serão trocadas
        btnPrev: '.prev',   // Botão avançar
        btnNext: '.next'    // Botão retroceder
    }) 
})()
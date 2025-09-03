const btnMenu = document.getElementById("hamburguer-button")
const menu = document.getElementById("menu")

btnMenu.classList.add("hamburguer-button-js-enabled")


function closeMenu(){
    btnMenu.setAttribute("aria-expanded", "false")
    menu.setAttribute("aria-hidden", "true")
    menu.classList.add("menu-closed")
}
closeMenu()

btnMenu.addEventListener("click", function(evt){
    let expanded = this.getAttribute("aria-expanded") === "true" ? true : false


    evt.stopPropagation()

    document.removeEventListener("click", closeMenu) // evento para fechar menu ao clicar fora.

    if (expanded){
        menu.classList.add("menu-closed")      
    }else{
        menu.classList.remove("menu-closed")
    }

    this.setAttribute("aria-expanded", !expanded)
    menu.setAttribute("aria-hidden", expanded)

    document.addEventListener("click", closeMenu)
})



const mediaQuery = window.matchMedia("(min-width: 768px)")

function handleQueryChange(e){
    if(e.matches){
        menu.setAttribute("aria-hidden", "false")
        btnMenu.setAttribute("aria-expanded", "true")
    }else{
        menu.setAttribute("aria-hidden", "true")
        btnMenu.setAttribute("aria-expanded", "false")
        menu.classList.add("menu-closed")
    }
}

mediaQuery.addEventListener("change", handleQueryChange)
handleQueryChange(mediaQuery)
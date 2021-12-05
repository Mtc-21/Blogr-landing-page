 const menu = document.querySelector("label");
    menu.addEventListener("click", (e) => {
      let imgMenu = e.target;
      e.target.getAttribute("src") === "images/icon-close.svg" ?
        e.target.setAttribute("src", "images/icon-hamburger.svg") :
        e.target.setAttribute("src", "images/icon-close.svg")
    });
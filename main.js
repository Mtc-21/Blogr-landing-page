 const menu = document.querySelector("label");
    menu.addEventListener("click", (e) => {
      let imgMenu = e.target;
      e.target.getAttribute("src") === "images/icon-close.svg" ?
        e.target.setAttribute("src", "images/icon-hamburger.svg") :
        e.target.setAttribute("src", "images/icon-close.svg")
    });
    // animation scroll
    const elements=document.querySelectorAll(".transition");
   
    const ob=new IntersectionObserver(entries=>{
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
        if(entry.isIntersecting) ob.unobserve(entry.target)
      },{
        root:null,
        rootMargin:"-50px -50px 0px -50px",
        threshold: 1.0,
      });
    }
    );
  
    elements.forEach(elem => {
        ob.observe(elem)
    });
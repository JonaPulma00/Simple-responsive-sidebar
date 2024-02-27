const cloud =  document.getElementById("menu");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo")
const menuOculto= document.querySelector(".menu-oculto");
const main = document.querySelector("main");

//Con este even listener añadimos una clase, para hacer barra lateral mas pequeña o mas ancha al hacer click si esta se añade la clase, de lo contrario se elimina. Lo mismo con el span
menu.addEventListener("click",()=>{
  barraLateral.classList.toggle("mini-barra-lateral");
  main.classList.toggle("min-main");
  spans.forEach((span)=>{
    span.classList.toggle("oculto");
  });
});

palanca.addEventListener("click",()=>{
  let body = document.body;
  body.classList.toggle("dark-mode");
  circulo.classList.toggle("prendido");
});
menuOculto.addEventListener("click",()=>{
  barraLateral.classList.toggle("max-barra-lateral");
  if (barraLateral.classList.contains("max-barra-lateral")) {
    menuOculto.children[0].style.display = "none";
    menuOculto.children[1].style.display = "block";
  }else{
    menuOculto.children[0].style.display = "block";
    menuOculto.children[1].style.display = "none";
  }
  if (window.innerWidth <= 320) {
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.add("min-main");
    spans.forEach((span)=>{
      span.classList.add("oculto");
    });
  }
});
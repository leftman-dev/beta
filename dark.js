//aplicar fondo y color de letras oscuro y blanco
var a = document.querySelector(".mode-circle");
a.addEventListener("click", () => {
  var e = document.querySelector(".mode-circle");
  e.classList.toggle("mode-mover");
  //
  var bodys = document.querySelector("body");
  bodys.classList.toggle("dark");
  //
  var i = document.getElementById("white-1");
  i.classList.toggle("nav-white");

  var u = document.getElementById("white-3");
  u.classList.toggle("nav-white");


/* contenedores que se pondran fondo-blanco*/
  var ta = document.querySelector('#c1');
  ta.classList.toggle('blanco');
  var te = document.querySelector('#c2');
  te.classList.toggle('blanco');
  var ti = document.querySelector('#c3');
  ti.classList.toggle('blanco');
  var to = document.querySelector('#c4');
  to.classList.toggle('blanco');
  var tu = document.querySelector('#c5');
  tu.classList.toggle('blanco');
  var tus = document.querySelector('#c6');
  tus.classList.toggle('blanco');
 
});

//menu activado 
var menus = document.querySelector("#menu");
menus.addEventListener("click", () => {
  var menuon = document.querySelector(".menu");
  menuon.classList.add("menuon");
});

//menu desactivado 
var menus = document.querySelector("#cerrar");
menus.addEventListener("click", () => {
  var menuon = document.querySelector(".menu");
  menuon.classList.remove("menuon");
});
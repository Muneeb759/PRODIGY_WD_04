const header = document.querySelector("header");
// const navlist = document.querySelector("navlist");

// navlist.addEventListener("click", () =>{

// });

// function navlist(){
//   var element = document.getElementById("navlist");
//   element.classList.add("display: block;")
// };

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

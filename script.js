let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


window.onload=pageLoad;
function pageLoad(){
  var form =document.getElementById("form");
  form.onsubmit=validate;
}



function validate(){
var check=true;
var fname=document.getElementById("firstname").value;
var lname=document.getElementById("lastname").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var phone=document.getElementById("phone").value;
var your=document.getElementById("your").value;
var much=document.getElementById("much").value;
  var location=document.getElementById("address").value;
  var add=document.getElementById("extra").value;
  


if(fname == "")
{

  alert ('Frist name is required');
  check=false;
  return check;
}
if(!fname.match(/^[A-Za-z]+$/))
{
alert("only letters allowed in frist name fild");
check=false;
  return check;
}



if(lname == "")
{

  alert ('Last name is required');
  check=false;
  return check;
}
if(!lname.match(/^[A-Za-z]+$/))
{
alert("only letters allowed in last name fild");
check=false;
  return check;
}

if(phone == "")
{
  alert ('phone is required');
  check=false;
  return check;
}
if(!phone.match(/^[0-9]{11}$/))
{
alert("phone is not valid");
check=false;
  return check;
}


if(email == "")
{
  alert ('Email is required');
  check=false;
  return check;
}
if(!email.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/))
{
alert("Email is not valid");
check=false;
  return check;
}


if(password == "")
{
  alert ('password is required');
  check=false;
  return check;
}

if(!password.match(/^(?=.*\d)(?!.* )(?=.*[a-z])(?=.*[A-z]{1}).{8}/) || password[0]==password[0].toLowerCase())
{
alert("password is not valid ,it must contain 8 characters: one_uppercase at frist , one_lowercase, one_number , one special character at least , and no spaces ");
check=false;
  return check;
}


if(your== "")
{
  alert ('Your order is required');
  check=false;
  return check;
}
if(!your.match(/^[a-zA-Z\s]*$/))
{
alert("only letters or space allowed in order fild");
check=false;
  return check;
}
  
  if(!add.match(/^[a-zA-Z\s]*$/))
{
alert("only letters or space allowed in Aditional  fild");
check=false;
  return check;
}


if(much== "")
{
  alert ('Number of your orders is required');
  check=false;
  return check;
}
  
  if(this.radio[0].checked==false && this.radio[1].checked==false)
{
  alert('please select gender');
  check=false;
  return check;
}
  
  
  
  if(location== "")
{
  alert ('location is required');
  check=false;
  return check;
}
  if(!location.match(/^[a-zA-Z\s]*$/))
{
  alert("only letters or space allowed in address fild");
  check=false;
    return check;
  }
  
  

if (check==true){
alert('Thanks'+" "+fname+" "+lname+" "+'for join to us');
window.location.href='index.html';

}
return check;



}

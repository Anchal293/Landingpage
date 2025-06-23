const btn = document.querySelector(".menu");
const contact = document.querySelector(".contact");
const about = document.querySelector(".about");
const info = document.querySelector(".info");
const home = document.querySelector(".home");
const btn1 =document.querySelector(".Button1");
const btn2 = document.querySelector("#Button");
const btn3 = document.querySelector("#button3");

document.addEventListener("DOMContentLoaded", function () {
  const order = document.querySelector(".order-now-btn");
  if (order) {
    order.addEventListener("click", function () {
      window.location.href = "foodOrder.html";
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const singIn = document.querySelector(".sign-in");
  if (singIn) {
    singIn.addEventListener("click", function () {
      window.location.href = "signIn.html";
    });
  }
});

btn.addEventListener("click" ,function(){
    window.location.href = "menu.html";
});

contact.addEventListener("click", function (e) {
    window.location.href = "contact.html";
  });

  about.addEventListener("click", function(){
     window.location.href = "about.html";
  });

 info.addEventListener("click", function(){
     window.location.href = "information.html";
  });

  home.addEventListener("click", function(){
     window.location.href = "index.html";
  });

  btn1.addEventListener("click", function(){
     window.location.href = "menu.html";
  });

  btn2.addEventListener("click", function(){
     window.location.href = "about.html";
  });

   btn3.addEventListener("click", function(){
     window.location.href = "menu.html";
  });

  singIn.addEventListener("click", function(){
     window.location.href = "signIn.html";
  });

 
contact.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  const response = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await response.json();

  if (data.success) {
    alert("Thank you! Your message has been sent.");
    this.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
});







let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}); 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
let cart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
  searchForm.classList.remove('active');
  cart.classList.toggle('active');
  loginForm.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  loginForm.classList.toggle('active');
}

let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.box-container .box').forEach(box =>{
  box.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = box.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
       preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});

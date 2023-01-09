import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});


const main = document.querySelector('.main');

const imageDiv = document.createElement('div');
imageDiv.classList.add('image');

const img = document.createElement('img');
img.src = 'https://images.pexels.com/users/avatars/157994802/mathilde-langevin-554.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1';

imageDiv.appendChild(img);
main.appendChild(imageDiv);

const image = document.querySelector('.image');

image.addEventListener('click', () => {
  image.style.transform = 'scale(2)';
});
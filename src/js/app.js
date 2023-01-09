import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});


const imageDiv = document.querySelector('.image')

imageDiv.addEventListener('click', getBigger)

function getBigger(){
  imageDiv.style.transform = 'scale(2)';
}
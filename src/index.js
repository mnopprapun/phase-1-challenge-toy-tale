let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


youUrl = 'http://localhost:3000/toys'

fetch(youUrl)
.then(res =>res.json())
.then(toyArray => toyList(toyArray))

function toyList(toyInput) {
  
}

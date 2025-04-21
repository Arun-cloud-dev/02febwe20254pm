const title = document.querySelector("#mail-title");

title.style.color = 'red';

const heading = document.querySelector(".title");
const desc = document.querySelector("#desc");



//event 

document.querySelector('#changeBtn').addEventListener('click', () => {
  
    heading.textContent = "New Title";
    desc.style.color = "blue";
});


// title.style.color = "red";
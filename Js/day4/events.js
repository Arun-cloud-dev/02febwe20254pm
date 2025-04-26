const box = document.getElementById("box");

box.addEventListener('click', () => {
    box.style.backgroundColor = "red";
    box.textContent = "Clicked!";
})



box.addEventListener('dblclick', () => {
    box.style.backgroundColor = "blue";
    box.textContent = "Double Clicked!";
})


box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "green";
    box.textContent = "Mouse Over!";
});


box.addEventListener('mouseout', () => { 
    box.style.backgroundColor = "yellow";
    box.textContent = "Mouse Out!";
})
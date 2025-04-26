// const title = document.querySelector("#mail-title");

// title.style.color = 'red';

// const heading = document.querySelector(".title");
// const desc = document.querySelector("#desc");



// //event 

// document.querySelector('#changeBtn').addEventListener('click', () => {
  
//     heading.textContent = "New Title";
//     desc.style.color = "blue";
// });
// title.style.color = "red";


const list = document.getElementById("myList");
const addButton = document.getElementById("addItem");
const itemInput = document.getElementById("itemInput");


// addButton.addEventListener('click', () => {
//     const newItem = document.createElement("li");
//     newItem.textContent = "New List Item"
//     list.appendChild(newItem)
// });




addButton.addEventListener('click', () => { 
    const inputValue = itemInput.value; //get the text from input 


    if (inputValue.trim() !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = inputValue; //set the text of the new item to the input value
        list.appendChild(newItem); //add the new item to the list
        itemInput.value = ""; //clear the input field
    } else {
        alert("Please enter a valid item.");
    }
})

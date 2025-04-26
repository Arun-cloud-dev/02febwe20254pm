// const form = document.getElementById('form');




// form.addEventListener('submit', (e) => {
//     e.preventDefault();
// alert('form submitted succesfully !')})



// const genderSelect = document.getElementById('gender')

// genderSelect.addEventListener('change', () => {
//     alert('gender changed to : ' + genderSelect.value)
// });





const usernameInput = document.getElementById('username');


const live = document.getElementById('sowlive');


usernameInput.addEventListener('input', () => {
    live.innerText = 'username typing : '+ usernameInput.value;
})


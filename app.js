
const nameElement = document.getElementById('name');

const updateButton = document.getElementById('update-button');

const nameInput = document.getElementById('name-input');

updateButton.addEventListener('click', () => {
console.log('hello')
    const name = nameInput.value;

    nameElement.textContent = name;



});


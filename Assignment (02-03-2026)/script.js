const form = document.getElementById('studentForm');
const successBox = document.getElementById('successBox');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload
    
    let isNameValid = checkInput('username');
    let isEmailValid = checkEmail('email');

    if (isNameValid && isEmailValid) {
        successBox.style.display = 'block';
        form.reset(); // Clear the form
    } else {
        successBox.style.display = 'none';
    }
});

function checkInput(id) {
    const input = document.getElementById(id);
    const parent = input.parentElement;
    if (input.value.trim() === "") {
        parent.classList.add('error');
        return false;
    } else {
        parent.classList.remove('error');
        return true;
    }
}

function checkEmail(id) {
    const input = document.getElementById(id);
    const parent = input.parentElement;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic Regex for email
    
    if (!emailPattern.test(input.value)) {
        parent.classList.add('error');
        return false;
    } else {
        parent.classList.remove('error');
        return true;
    }
}
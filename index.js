const form = document.querySelector('#form');
const inputHead = document.querySelector('#heading');
const email = document.querySelector('#email');
const date = document.querySelector('#date');
const message = document.querySelector('#message');

const validateText = (input) => {
    if(input.value.trim() === '') {

        setError(input, 'Name can\'t be empty')
        return false;

    }
    else if(input.value.trim().length < 2) {        
        setError(input, 'Name must be at least 2 chars long')
        return false;
    }
    else {
        setSuccess(input)
        return true;
    }
}
const validateEmail = email => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(email.value.trim() === '') {
        setError(email, 'You need to enter an email adress')
        return false;
    }
    else if(!regEx.test(email.value)) {
        setError(email, 'Email adress is not valid')
        return false;
    }
    else {
        setSuccess(email)
        return true;
    }
}




// console.log(inputHead);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
})
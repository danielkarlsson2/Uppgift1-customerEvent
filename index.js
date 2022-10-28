const form = document.querySelector('#form');
const headline = document.querySelector('#headline');
const email = document.querySelector('#email');
const createdDate = document.querySelector('#date');
const textMessage = document.querySelector('#textMessage');
const taskStatus = document.querySelector('#taskStatus');

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

taskStatus.addEventListener("change", () => {
    if (taskStatus.checked) {
        console.log('is checked')
        taskStatus.value = 1
    }
    else {
        console.log('is not checked')
        taskStatus.value = 0
    }
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // for (let element of e.target)
    //     console.log(element.value)

    let customerTask = {
        headline: e.target[0].value,
        email: e.target[1].value,
        createdDate: e.target[2].value,
        textMessage: e.target[3].value,
        taskStatus: e.target[4].value
    }
    console.log(customerTask)

    fetch("https://webapi-uppgift1.azurewebsites.net/api/customerTasks", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerTask)
    })
})
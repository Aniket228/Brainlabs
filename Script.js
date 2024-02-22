const form = document.getElementById('form');
const username = document.getElementById('username');
const username1 = document.getElementById('username1');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const username1Value = username1.value.trim();
    const emailValue = email.value.trim();
    if(usernameValue === '') {
        setError(username, 'Username is required without number input');
    } else {
        setSuccess(username);
    }
    if(username1Value === '') {
        setError(username1, 'Username is required without number input');
    } else {
        setSuccess(username1);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
}
function myFunction() {
    document.getElementById("form").reset();
  }

function buttonColor() {
    document.getElementById("button").style.backgroundColor= '#b6bf00';
}
document.getElementById("button").addEventListener("click", function(){ 
    document.getElementById("button").innerHTML = "ENROLL NOW";
});

const button1 = document.getElementById('button1');
button1.addEventListener('mouseover', function handleMouseOver() {
    button1.style.color = 'white';
});
button1.addEventListener('mouseout', function handleMouseOut() {
    button1.style.color = '#006751';
});

const button2 = document.getElementById('button2');
button2.addEventListener('mouseover', function handleMouseOver() {
    button2.style.color = 'white';
});
button2.addEventListener('mouseout', function handleMouseOut() {
    button2.style.color = '#006751';
});

var em = localStorage.setItem("email", email);
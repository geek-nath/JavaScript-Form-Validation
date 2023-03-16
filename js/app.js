// form validation data for log in

const userDetails = {
    username: "admin",
    password: "admin001"
};

// check if user input === with userDetails 

const logInFormEl = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const errorMessage = document.getElementById('errorMessage');

submitButton.addEventListener('click', (e)=> {
    e.preventDefault();

    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if((userName === userDetails.username) && (password === userDetails.password)) {
        console.log('Login successfull');
        errorMessage.classList.add('text-success');
        errorMessage.innerHTML = "Login Successful"
    } 
    
    else if((userName === userDetails.username) && (password !== userDetails.password)) {
        console.log('Incorrect password');
        errorMessage.classList.add('text-danger');
        errorMessage.innerHTML = "Incorrect password"
    } 
    
    else if((password === userDetails.password) && (userName !== userDetails.username)) {
        console.log('Username not found');
        errorMessage.classList.add('text-danger');
        errorMessage.innerHTML = "Username not found"
    }

    else if((userName.length === 0) && (password.length === 0)) {
        console.log('Please enter your login details');
        errorMessage.classList.add('text-danger');
        errorMessage.innerHTML = "Please enter your login details."
    }
});

// show password toggle

const showPasswordToggle = document.getElementById('showPasswordToggle');

showPasswordToggle.addEventListener('click', ()=> {
    const password = document.getElementById('password');

    if(password.type === 'password') {
        password.type = 'text';
        showPasswordToggle.innerHTML = 'Hide password';
    } else {
        password.type = 'password';
        showPasswordToggle.innerHTML = 'Show password';
    }
});

// auto fill log in details

const autoFillToggleButton = document.getElementById('autoFillDetails');

autoFillToggleButton.addEventListener('click', ()=> {
    const password = document.getElementById('password');
    const username = document.getElementById('username');

    password.value = userDetails.password;
    username.value = userDetails.username;
});
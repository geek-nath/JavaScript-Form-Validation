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
        errorMessage.classList.remove('text-success');
        errorMessage.innerHTML = "Incorrect password"
    } 
    
    else if((password === userDetails.password) && (userName !== userDetails.username)) {
        console.log('Username not found');
        errorMessage.classList.add('text-danger');
        errorMessage.classList.remove('text-success');
        errorMessage.innerHTML = "Username not found"
    }

    else if((userName.length === 0) && (password.length === 0)) {
        console.log('Please enter your login details');
        errorMessage.classList.add('text-danger');
        errorMessage.classList.remove('text-success');
        errorMessage.innerHTML = "Please enter your login details."
    } 

    else if((userName !== userDetails.username) && (password !== userDetails.password)) {
        console.log('Username / Password incorrect');
        errorMessage.classList.add('text-danger');
        errorMessage.classList.remove('text-success');
        errorMessage.innerHTML = "Please enter the correct login details."
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

// sign up form shows on sign up click

const signUpToggle = document.getElementById('signUpToggle');

signUpToggle.addEventListener('click', ()=> {
    const logInFormBox = document.getElementById('logInFormBox');
    const signUpFormBox  = document.getElementById('signUpFormBox');

    if(signUpFormBox.classList.contains('d-none')) {
        // console.log('test one passed')

        logInFormBox.classList.add('d-none');
        signUpFormBox.classList.remove('d-none');
    }
});

// log in toggle button function

const logInToggle = document.getElementById('loginToggle');

logInToggle.addEventListener('click', ()=> {
    const logInFormBox = document.getElementById('logInFormBox');
    const signUpFormBox  = document.getElementById('signUpFormBox');

    if(logInFormBox.classList.contains('d-none')) {
        // console.log('test one passed')

        logInFormBox.classList.remove('d-none');
        signUpFormBox.classList.add('d-none');
    }
});

// sign up form validation

const signUpButton = document.getElementById('signUpSubmitButton');
const signUpErrorMessage = document.getElementById('signUpErrorMessage');

signUpButton.addEventListener('click', (e)=> {
    e.preventDefault();

    const emailAddress = document.getElementById('emailAddress').value;
    const signUpPassword = document.getElementById('signUpPassword').value;
    const signUpConfirmPassword = document.getElementById('signUpConfirmPassword').value;

    if(emailAddress.indexOf('@') === -1 ) {
        console.log('email must conatain @')
        signUpErrorMessage.innerHTML = 'email address must contain @';
        signUpErrorMessage.classList.add('text-danger');
        signUpErrorMessage.classList.remove('text-success');
    } else {
        console.log('Correct email');
    }

    if(signUpPassword !== signUpConfirmPassword) {
        console.log('password confirmation does not match your password');
        signUpErrorMessage.innerHTML = 'password confirmation does not match your password';
        signUpErrorMessage.classList.add('text-danger');
        signUpErrorMessage.classList.remove('text-success');
    } else {
        console.log('account created successfully');
    }

    if(emailAddress.indexOf('@') > -1 && (signUpPassword === signUpConfirmPassword)) {
        console.log('Your account has been created successfully')
        signUpErrorMessage.innerHTML = 'Your account has been created successfully';
        signUpErrorMessage.classList.add('text-success');
        signUpErrorMessage.classList.remove('d-none');
    }
});

// show password toggle for signUp form

const signUpShowPasswordToggle = document.getElementById('signUpShowPasswordToggle');

signUpShowPasswordToggle.addEventListener('click', ()=> {
    const signUpPassword = document.getElementById('signUpPassword');
    const signUpConfirmPassword = document.getElementById('signUpConfirmPassword');

    if((signUpPassword && signUpConfirmPassword).type === 'password') {
        signUpPassword.type = 'text';
        signUpConfirmPassword.type = 'text';
        signUpShowPasswordToggle.innerHTML = 'Hide password';
    } else {
        signUpPassword.type = 'password';
        signUpConfirmPassword.type = 'password';
        signUpShowPasswordToggle.innerHTML = 'Show password';
    }
});
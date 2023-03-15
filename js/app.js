// form validation data for log in

const userDetails = {
    username: "admin",
    password: "admin001"
};

// check if user input === with userDetails 

const logInFormEl = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('submit', (e)=> {
    e.preventDefault();

    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('hello world')
});
let userId = prompt('Enter your username:');
let password = prompt('Enter your password:');

checkCredentials(userId, password);

function checkCredentials(userId, password) {
    const messageElement = document.querySelector('.message');

    if (userId === 'admin' && password === 'secret') {
        console.log('Welcome admin!');
        alert("Welcome admin!")
    } else {
        console.log('BAD LOGIN CREDENTIALS');
        alert("BAD LOGIN CREDENTIALS");
    }
}
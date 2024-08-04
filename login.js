document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('change-password-form').addEventListener('submit', handleChangePassword);

    checkLoginState();

});

const storedUsername = 'admin'; // Default username
const storedPassword = 'password'; // Default password

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true'); // Save login state
        localStorage.setItem('username', username); // Save username
        window.location.href = "Azoom HomePage.html"; // Redirect to home page on successful login
    } else {
        alert('Invalid username or password');
    }
}

function handleChangePassword(event) {
    event.preventDefault(); // Prevent form submission

    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword === confirmPassword) {
        localStorage.setItem('password', newPassword); // Save new password
        storedPassword = newPassword; // Update the stored password
        alert('Password changed successfully');
        window.location.href = "Azoom HomePage.html"; // Redirect to home page 
    } else {
        alert('Passwords do not match');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.reload(); // Reload the page to reset the state
}

function showChangePassword() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('change-password-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('change-password-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
let currentUser = localStorage.getItem('currentUser'); // Ensure currentUser is correctly retrieved from localStorage

function checkLoginState() {
    const loginForm = document.getElementById('login-form');
    const welcomePage = document.getElementById('welcome');
    const loginMenu = document.getElementById('menu-login');
    const logoutMenu = document.getElementById('menu-logout');

    // Ensure elements exist
    if (!loginForm || !welcomePage || !loginMenu || !logoutMenu) {
        console.error('One or more elements not found.');
        return;
    }

    // Display or hide elements based on login state
    if (currentUser) {
        loginForm.style.display = 'none';
        welcomePage.style.display = 'block';
        loginMenu.style.display = 'none';
        logoutMenu.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
        welcomePage.style.display = 'none';
        loginMenu.style.display = 'block';
        logoutMenu.style.display = 'none';
    }
}

function handleChangePassword(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let storedPassword = localStorage.getItem('password') || 'password'; // Use let for reassignable variable

    if (currentPassword === storedPassword && newPassword === confirmPassword) {
        localStorage.setItem('password', newPassword); // Save the new password
        alert('Password changed successfully');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Current password is incorrect or new passwords do not match');
    }
}
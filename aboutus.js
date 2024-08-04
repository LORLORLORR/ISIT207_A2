 // Check login state on load
 document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    if (isLoggedIn === 'true') {
        document.getElementById('menu-login').style.display = 'none';
        document.getElementById('menu-logout').style.display = 'block';
        document.querySelector('.navbar .nav-links').insertAdjacentHTML('beforeend', `<li class="nav-link">Welcome, ${username}</li>`);
    } else {
        document.getElementById('menu-login').style.display = 'block';
        document.getElementById('menu-logout').style.display = 'none';
    }
});

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.reload(); // Reload the page to reset the state
}
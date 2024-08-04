document.addEventListener('DOMContentLoaded', () => {
    // Perform logout actions
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    
    alert('You have been logged out successfully.');
});

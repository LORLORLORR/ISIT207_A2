document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('change-password-form');
    if (form) {
        form.addEventListener('submit', handleChangePassword);
    }
});

function handleChangePassword(event) {
    event.preventDefault(); // Prevent the default form submission

    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Retrieve the stored password from localStorage
    let storedPassword = localStorage.getItem('password') || 'password'; // Default password

    if (currentPassword === storedPassword && newPassword === confirmPassword) {
        // Save the new password to localStorage
        localStorage.setItem('password', newPassword);
        alert('Password changed successfully');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Current password is incorrect or new passwords do not match');
    }

}

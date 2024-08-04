document.addEventListener('DOMContentLoaded', function() {
    // Get reservation ID from local storage
    const reservationId = localStorage.getItem('reservationId');

    // Display check-in details
    const checkInContent = document.getElementById('checkInContent');
    checkInContent.innerHTML = `
        <p>Welcome to AZoom Car Rental. Please bring the following items:</p>
        <ul>
            <li>Reservation Confirmation</li>
            <li>Valid ID</li>
            <li>Credit Card used for booking</li>
        </ul>
        <p>Your Reservation ID: <strong>${reservationId}</strong></p>
        <p>Proceed to the counter for your car pickup. Thank you!</p>
    `;

    document.getElementById('complete-check-in-btn').addEventListener('click', () => {
        window.location.href = 'return-car.html'; // Redirect to return car page
    });
});


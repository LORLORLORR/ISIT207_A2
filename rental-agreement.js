document.addEventListener('DOMContentLoaded', function() {
    // Get reservation details from local storage
    const reservationId = localStorage.getItem('reservationId');
    const pickupDate = localStorage.getItem('pickupDate');
    const returnDate = localStorage.getItem('returnDate');
    const carType = localStorage.getItem('carType');
    const creditCard = localStorage.getItem('creditCard');
    const rentMode = localStorage.getItem('rentMode');
    const addOns = localStorage.getItem('addOns');

    // Display reservation details
    const summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = `
        <div class="summary-item"><strong>Reservation ID:</strong> ${reservationId}</div>
        <div class="summary-item"><strong>Pickup Date:</strong> ${pickupDate}</div>
        <div class="summary-item"><strong>Return Date:</strong> ${returnDate}</div>
        <div class="summary-item"><strong>Car Type:</strong> ${carType}</div>
        <div class="summary-item"><strong>Credit Card Number:</strong> ${creditCard}</div>
        <div class="summary-item"><strong>Rent Mode:</strong> ${rentMode}</div>
        <div class="summary-item"><strong>Add-Ons:</strong> ${addOns}</div>
    `;

    // Enable or disable proceed button based on checkbox
    const agreementCheckbox = document.getElementById('agreement');
    const proceedButton = document.getElementById('proceed-to-check-in');
    
    agreementCheckbox.addEventListener('change', () => {
        proceedButton.disabled = !agreementCheckbox.checked;
    });

    proceedButton.addEventListener('click', () => {
        showConfirmationPopup();
    });
});

function showConfirmationPopup() {
    const reservationId = localStorage.getItem('reservationId');
    const pickupDate = localStorage.getItem('pickupDate');
    const returnDate = localStorage.getItem('returnDate');
    const carType = localStorage.getItem('carType');

    const confirmationMessage = `
        <h2>Reservation Confirmation</h2>
        <p><strong>Reservation ID:</strong> ${reservationId}</p>
        <p><strong>Pickup Date:</strong> ${pickupDate}</p>
        <p><strong>Return Date:</strong> ${returnDate}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p>Proceed to check-in at the rental office.</p>
    `;

    const confirmationPopup = document.createElement('div');
    confirmationPopup.className = 'confirmation-popup';
    confirmationPopup.innerHTML = `
        <div class="confirmation-content">
            ${confirmationMessage}
            <button id="confirm-btn" class="btn btn-primary">Confirm</button>
            <button id="cancel-btn" class="btn btn-secondary">Cancel</button>
        </div>
    `;

    document.body.appendChild(confirmationPopup);

    document.getElementById('confirm-btn').addEventListener('click', () => {
        document.body.removeChild(confirmationPopup);
        window.location.href = 'check-in.html'; // Redirect to check-in page
    });

    document.getElementById('cancel-btn').addEventListener('click', () => {
        document.body.removeChild(confirmationPopup);
    });
}

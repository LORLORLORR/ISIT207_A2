document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        // Generate reservation ID
        const reservationId = generateReservationId();

        // Retrieve form values
        const pickupDate = document.getElementById('pickupDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const carType = document.getElementById('carType').value;
        const rentMode = document.getElementById('rentMode').value;
        const addOns = document.getElementById('addOns').value;
        const creditCard = document.getElementById('creditCard').value;

        // Save reservation details and ID in local storage
        localStorage.setItem('reservationId', reservationId);
        localStorage.setItem('pickupDate', pickupDate);
        localStorage.setItem('returnDate', returnDate);
        localStorage.setItem('carType', carType);
        localStorage.setItem('creditCard', creditCard);
        localStorage.setItem('rentMode', rentMode);
        localStorage.setItem('addOns', addOns);

        // Create query string for the rental agreement page
        const queryString = new URLSearchParams({
            reservationId,
            pickupDate,
            returnDate,
            carType,
            creditCard,
            rentMode,
            addOns
        }).toString();

        // Redirect to the rental agreement page
        window.location.href = `rental-agreement.html?${queryString}`;
    });
});

function generateReservationId() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    return `RES-${timestamp}-${randomNum}`;
}

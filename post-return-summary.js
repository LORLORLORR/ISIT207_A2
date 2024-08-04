document.addEventListener('DOMContentLoaded', function() {
    // Retrieve reservation details from local storage
    const reservationId = localStorage.getItem('reservationId');
    const pickupDate = localStorage.getItem('pickupDate');
    const returnDate = localStorage.getItem('returnDate');
    const carType = localStorage.getItem('carType');
    const damageDescription = localStorage.getItem('damageDescription');
    const paymentMethod = localStorage.getItem('paymentMethod');

    console.log('Damage Description from Storage:', damageDescription);
    console.log('Payment Method from Storage:', paymentMethod);

    // Calculate the final bill
    const numberOfDays = calculateNumberOfDays(pickupDate, returnDate);
    const carRate = getCarRate(carType);
    const finalBill = carRate * numberOfDays;

    // Display reservation details
    const damageDetailsDiv = document.getElementById('damage-details');
    const finalBillDiv = document.getElementById('final-bill');

    damageDetailsDiv.innerHTML = `
        <div class="summary-item"><strong>Damage Description:</strong> ${damageDescription || 'No damages reported.'}</div>
        <div class="summary-item"><strong>Payment Method:</strong> ${paymentMethod || 'Not specified'}</div>
    `;

    finalBillDiv.innerHTML = `
        <div class="summary-item"><strong>Reservation ID:</strong> ${reservationId}</div>
        <div class="summary-item"><strong>Pickup Date:</strong> ${pickupDate}</div>
        <div class="summary-item"><strong>Return Date:</strong> ${returnDate}</div>
        <div class="summary-item"><strong>Car Type:</strong> ${carType}</div>
        <div class="summary-item"><strong>Number of Days:</strong> ${numberOfDays}</div>
        <div class="summary-item"><strong>Car Rate:</strong> $${carRate}/day</div>
        <div class="summary-item"><strong>Total Bill:</strong> $${finalBill.toFixed(2)}</div>
    `;
});

function calculateNumberOfDays(pickupDate, returnDate) {
    const pickup = new Date(pickupDate);
    const returnDateObj = new Date(returnDate);
    const timeDifference = returnDateObj - pickup;
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

function getCarRate(carType) {
    // Map car types to rates
    const carRates = {
        'Sedan': 40,
        'SUV': 60,
        'Convertible': 70,
        'Electric': 50
    };

    // Normalize carType to match the keys in carRates
    const normalizedCarType = carType.charAt(0).toUpperCase() + carType.slice(1).toLowerCase();
    
    console.log('Normalized Car Type:', normalizedCarType);

    return carRates[normalizedCarType] || 0;
}

document.addEventListener('DOMContentLoaded', function() {
    const returnCarButton = document.getElementById('return-car-btn');

    returnCarButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const damageDescription = document.getElementById('damage-description').value;
        const paymentMethod = document.getElementById('payment-method').value;

        console.log('Damage Description:', damageDescription);
        console.log('Payment Method:', paymentMethod);

        localStorage.setItem('damageDescription', damageDescription);
        localStorage.setItem('paymentMethod', paymentMethod);

        // Redirect to post-return summary page
        window.location.href = 'post-return-summary.html';
    });
});

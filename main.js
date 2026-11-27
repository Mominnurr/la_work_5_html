
const form = document.getElementById("bookingForm");

if (form) {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const tourInput = document.getElementById("tour");
    const travellersInput = document.getElementById("travellers");
    const totalPrice = document.getElementById("totalPrice");
    const message = document.getElementById("message");

    function calculatePrice() {

        const price = Number(tourInput.value);
        const travellers = Number(travellersInput.value);

        let total = price * travellers;

        if (travellers >= 5) {
            total = total * 0.9;
        }

        totalPrice.textContent =
            `Total: ${travellers} × ${price} USD = ${total} USD`;
    }

    tourInput.addEventListener("change", calculatePrice);
    travellersInput.addEventListener("input", calculatePrice);

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        nameInput.style.border = "1px solid #ccc";
        emailInput.style.border = "1px solid #ccc";

        message.style.color = "#C0392B";

        if (nameInput.value.trim() === "") {
            message.textContent = "Please enter your name.";
            nameInput.style.border = "2px solid #C0392B";
            nameInput.focus();
            return;
        }

        if (!emailInput.value.includes("@")) {
            message.textContent = "Please enter a valid email address.";
            emailInput.style.border = "2px solid #C0392B";
            emailInput.focus();
            return;
        }

        const price = Number(tourInput.value);
        const travellers = Number(travellersInput.value);

        let total = price * travellers;

        if (travellers >= 5) {
            total = total * 0.9;
        }

        message.style.color = "green";

        message.textContent =
            `Thank you ${nameInput.value}! Your booking request is confirmed on screen. Total: ${total} USD.`;
    });

    calculatePrice();
}

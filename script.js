document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const customerList = document.getElementById('customer-list');
    const serviceList = document.getElementById('service-list');
    const bookingList = document.getElementById('booking-list');
    const inventoryList = document.getElementById('inventory-list');
    const feedbackList = document.getElementById('feedback-list');
    const bookingServiceSelect = document.getElementById('booking-service');

    // Add customer
    document.getElementById('add-customer-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('customer-name').value;
        const address = document.getElementById('customer-address').value;
        const phone = document.getElementById('customer-phone').value;
        const email = document.getElementById('customer-email').value;

        const li = document.createElement('li');
        li.textContent = `${name} - ${address} - ${phone} - ${email}`;
        customerList.appendChild(li);
        this.reset();
    });

    // Add service
    document.getElementById('add-service-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('service-name').value;
        const description = document.getElementById('service-description').value;

        const li = document.createElement('li');
        li.textContent = `${name} - ${description}`;
        serviceList.appendChild(li);

        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        bookingServiceSelect.appendChild(option);
        this.reset();
    });

    // Add booking
    document.getElementById('add-booking-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const customer = document.getElementById('booking-customer').value;
        const date = document.getElementById('booking-date').value;
        const service = document.getElementById('booking-service').value;

        const li = document.createElement('li');
        li.textContent = `${customer} - ${date} - ${service}`;
        bookingList.appendChild(li);
        this.reset();
    });

    // Add inventory
    document.getElementById('add-inventory-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const item = document.getElementById('inventory-item').value;
        const quantity = document.getElementById('inventory-quantity').value;

        const li = document.createElement('li');
        li.textContent = `${item} - ${quantity}`;
        inventoryList.appendChild(li);
        this.reset();
    });

    // Add feedback
    document.getElementById('add-feedback-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const customerName = document.getElementById('feedback-customer-name').value;
        const feedback = document.getElementById('feedback-message').value;

        const li = document.createElement('li');
        li.textContent = `${customerName}: ${feedback}`;
        feedbackList.appendChild(li);
        this.reset();
    });
});

// Show page function
function showPage(pageId) {
    const pages = document.querySelectorAll('main > div');
    pages.forEach(page => {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('onclick').includes(pageId));
    });
}

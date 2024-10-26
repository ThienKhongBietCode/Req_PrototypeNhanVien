// Xử lý đặt lịch
function openBooking(service) {
    document.getElementById('service').value = service;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

function submitBooking(event) {
    event.preventDefault();
    
    // Lấy thông tin từ form
    const formData = {
        customerName: document.getElementById('customerName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        petName: document.getElementById('petName').value,
        petType: document.getElementById('petType').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        notes: document.getElementById('notes').value
    };

    // Kiểm tra dữ liệu
    if (!validateBooking(formData)) {
        return;
    }

    // Lưu đặt lịch vào localStorage (trong thực tế sẽ gửi lên server)
    saveBooking(formData);

    // Hiển thị thông báo thành công
    alert('Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    document.querySelector('.booking-form').reset();
}

function validateBooking(data) {
    // Kiểm tra dữ liệu (thêm điều kiện nếu cần)
    return true;
}

function saveBooking(data) {
    // Lưu vào localStorage
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(data);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

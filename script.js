function toggleSection(sectionId) {
    // Ẩn tất cả các phần
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    // Hiện phần được chọn
    document.getElementById(sectionId).classList.remove('hidden');
}

function openBooking(service) {
    document.getElementById('service').value = service;
    toggleSection('booking');
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Xử lý đặt lịch ở đây
    showToast('Đặt lịch thành công!');
    this.reset();
    toggleSection('services');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Xử lý gửi liên hệ ở đây
    showToast('Gửi liên hệ thành công!');
    this.reset();
    toggleSection('services');
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

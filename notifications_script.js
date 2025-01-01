// script.js

// Toggle the visibility of the notification dropdown
function toggleNotifications() {
    const dropdown = document.getElementById('notification-dropdown');
    dropdown.classList.toggle('active');
}

// Mark a notification as read
function markAsRead(button) {
    const notification = button.parentElement;
    notification.classList.remove('unread');
    button.disabled = true;
    button.textContent = "Already read";
    button.style.backgroundColor = "#f0f2f5"; // Grey out the "Mark as read" button
}

// Clear all notifications
function clearNotifications() {
    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = '';
    document.getElementById('notification-count').textContent = '0'; // Reset the notification count
}

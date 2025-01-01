

document.querySelectorAll('.story').forEach((story, index) => {
    const storyProgress = story.querySelector('.story-progress');
    let progress = 0;

   
    if (storyProgress) {
        const interval = setInterval(() => {
            progress += 1;
            storyProgress.style.width = progress + '%';


            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 100); 
    }
});


document.querySelectorAll('.story-img').forEach(storyImg => {
    storyImg.addEventListener('click', () => {
        alert('View full story');
    });
});




document.querySelector('.post-button').addEventListener('click', function() {
    const textArea = document.querySelector('textarea');
    const postContent = textArea.value.trim();

    if (postContent !== "") {
        const postContainer = document.querySelector('.posts');

      
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <p><strong>MAGNUS BROTHERS</strong> posted a new update:</p>
            <p>${postContent}</p>
            <div class="post-actions">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </div>
        `;

        postContainer.prepend(newPost);
        textArea.value = ""; 
    }
});






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


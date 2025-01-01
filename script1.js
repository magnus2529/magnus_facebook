// script.js

// Simulating story progress on each story
document.querySelectorAll('.story').forEach((story, index) => {
    const storyProgress = story.querySelector('.story-progress');
    let progress = 0;

    // Only simulate progress for stories that have a progress bar
    if (storyProgress) {
        const interval = setInterval(() => {
            progress += 1;
            storyProgress.style.width = progress + '%';

            // Stop the progress once it reaches 100%
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 100); // Update progress every 100ms
    }
});

// Handle clicking on a story (optional)
// You could add event listeners to open a detailed view of the story when clicked
document.querySelectorAll('.story-img').forEach(storyImg => {
    storyImg.addEventListener('click', () => {
        alert('View full story');
    });
});

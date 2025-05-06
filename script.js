document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('active'); // Toggle the active class
    });

    // Existing code...
});
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.querySelector('.play');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeElement = progressBar.previousElementSibling;
    const durationTimeElement = progressBar.nextElementSibling;

    // Function to play audio
    function playAudio(audioSrc) {
        audioPlayer.src = audioSrc;
        audioPlayer.play();
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
    }

    // Add click event to each card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');
            playAudio(audioSrc);
        });
    });

    // Existing code...
});
document.addEventListener('DOMContentLoaded', function() {
    const heartCheckbox = document.getElementById('heart-checkbox');
    const heartIcon = document.querySelector('.heart-icon');

    heartIcon.addEventListener('click', function() {
        heartCheckbox.checked = !heartCheckbox.checked;
        if (heartCheckbox.checked) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = '#1bd760';
        } else {
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '#f8f6f6';
        }
    });

    const modal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');
    const clickableElements = document.querySelectorAll('button, a');

    clickableElements.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.querySelector('.play');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeElement = progressBar.previousElementSibling;
    const durationTimeElement = progressBar.nextElementSibling;

    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        } else {
            audioPlayer.pause();
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        }
    });

    audioPlayer.addEventListener('timeupdate', function() {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;

        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);

        currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
        durationTimeElement.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;

        progressBar.max = duration;
        progressBar.value = currentTime;
    });

    progressBar.addEventListener('input', function() {
        audioPlayer.currentTime = progressBar.value;
    });
});

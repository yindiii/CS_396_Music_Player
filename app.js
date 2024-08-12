document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const volumeControl = document.getElementById('volume');
    const audio = new Audio();

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause';
        } else {
            audio.pause();
            playButton.textContent = 'Play';
        }
    });

    prevButton.addEventListener('click', () => {
        // Logic for previous song
    });

    nextButton.addEventListener('click', () => {
        // Logic for next song
    });

    volumeControl.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });

    // Initialize the player with the first song
    const initializePlayer = () => {
        audio.src = 'path/to/your/song.mp3';
        audio.volume = 0.5;
        // Set other song details
    };

    initializePlayer();
});

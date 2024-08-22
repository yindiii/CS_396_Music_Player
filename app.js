document.addEventListener("DOMContentLoaded", function() {
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const body = document.body;

    increaseFontBtn.addEventListener('click', () => {
        const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentSize + 1}px`;
    });

    decreaseFontBtn.addEventListener('click', () => {
        const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentSize - 1}px`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    let currentTheme = 'light';

    themeSwitcher.addEventListener('click', function() {
        switch (currentTheme) {
            case 'light':
                currentTheme = 'dark';
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                break;
            case 'dark':
                currentTheme = 'high-contrast';
                document.body.classList.remove('dark-theme');
                document.body.classList.add('high-contrast-theme');
                break;
            case 'high-contrast':
                currentTheme = 'light';
                document.body.classList.remove('high-contrast-theme');
                document.body.classList.add('light-theme');
                break;
        }
    });

    document.body.classList.add(currentTheme + '-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const volumeControl = document.getElementById('volume');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const albumArt = document.querySelector('.album-art');
    const genreSelect = document.getElementById('genre-select');
    let isPlaying = false;

    const playlist = [
        {
            src: 'assets/music/jazz.mp3',
            title: 'Jazz',
            artist: 'Unknown Guitarist',
            albumArt: 'assets/images/jazz.jpg'
        },
        {
            src: 'assets/music/rock.mp3',
            title: 'Rock on',
            artist: 'Arjun Rampal',
            albumArt: 'assets/images/rock.jpg'
        },
        {
            src: 'assets/music/classical.mp3',
            title: 'Classical',
            artist: 'Tchaikovsky',
            albumArt: 'assets/images/classical.jpg'
        },
        {
            src: 'assets/music/pop.mp3',
            title: 'Pop',
            artist: 'Zutomayo',
            albumArt: 'assets/images/pop.jpg'
        }
    ];

    let currentSongIndex = 0;
    const audio = new Audio();

    audio.addEventListener('canplaythrough', event => {
        if (isPlaying) {
            audio.play();
        }
    });

    const loadSong = (index) => {
        isPlaying = !audio.paused;
        audio.src = playlist[index].src;
        audio.load();
        title.textContent = playlist[index].title;
        artist.textContent = playlist[index].artist;
        albumArt.src = playlist[index].albumArt;
        if (isPlaying) {
            playSong();
        }
    };

    const playSong = () => {
        audio.play();
        playButton.textContent = '⏸️';
        albumArt.style.animation = 'rotate 7.5s linear infinite';
        isPlaying = true;
    };

    const pauseSong = () => {
        audio.pause();
        playButton.textContent = '▶️';
        albumArt.style.animation = 'none';
        isPlaying = false;
    };

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
    });

    volumeControl.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });

    genreSelect.addEventListener('change', function() {
        currentSongIndex = parseInt(genreSelect.value);
        loadSong(currentSongIndex);
    });

    loadSong(currentSongIndex); 
});

// document.addEventListener('DOMContentLoaded', function () {
//     const increaseFontButton = document.getElementById('increase-font');
//     const decreaseFontButton = document.getElementById('decrease-font');
//     const themeSwitcherButton = document.getElementById('theme-switcher');
//     const body = document.body;
//     let currentFontSize = 16;

//     increaseFontButton.addEventListener('click', function () {
//         currentFontSize += 2;
//         body.style.fontSize = currentFontSize + 'px';
//     });

//     decreaseFontButton.addEventListener('click', function () {
//         if (currentFontSize > 10) {
//             currentFontSize -= 2;
//             body.style.fontSize = currentFontSize + 'px';
//         }
//     });

//     themeSwitcherButton.addEventListener('click', function () {
//         body.classList.toggle('dark-mode');
//     });

//     const playButton = document.getElementById('play');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');
//     const volumeControl = document.getElementById('volume');
//     const title = document.getElementById('title');
//     const artist = document.getElementById('artist');
//     const albumArt = document.getElementById('album-art');
//     const playlistElement = document.getElementById('playlist');

//     const playlist = [
//         {
//             src: 'path/to/song1.mp3',
//             title: 'Song Title 1',
//             artist: 'Artist Name 1',
//             albumArt: 'images/album1.jpg'
//         },
//         {
//             src: 'path/to/song2.mp3',
//             title: 'Song Title 2',
//             artist: 'Artist Name 2',
//             albumArt: 'images/album2.jpg'
//         },
//         // Add more songs here
//     ];

//     let currentSongIndex = 0;
//     const audio = new Audio();

//     const loadSong = (index) => {
//         const song = playlist[index];
//         audio.src = song.src;
//         title.textContent = song.title;
//         artist.textContent = song.artist;
//         albumArt.src = song.albumArt;
//         updatePlaylist();
//     };

//     const updatePlaylist = () => {
//         playlistElement.innerHTML = '';
//         playlist.forEach((song, index) => {
//             const li = document.createElement('li');
//             li.textContent = `${song.title} - ${song.artist}`;
//             li.classList.add('list-group-item');
//             if (index === currentSongIndex) {
//                 li.classList.add('active');
//             }
//             li.addEventListener('click', () => {
//                 currentSongIndex = index;
//                 loadSong(currentSongIndex);
//                 playSong();
//             });
//             playlistElement.appendChild(li);
//         });
//     };

//     const playSong = () => {
//         audio.play();
//         playButton.textContent = '⏸️';
//     };

//     const pauseSong = () => {
//         audio.pause();
//         playButton.textContent = '▶️';
//     };

//     playButton.addEventListener('click', () => {
//         if (audio.paused) {
//             playSong();
//         } else {
//             pauseSong();
//         }
//     });

//     prevButton.addEventListener('click', () => {
//         currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
//         loadSong(currentSongIndex);
//         playSong();
//     });

//     nextButton.addEventListener('click', () => {
//         currentSongIndex = (currentSongIndex + 1) % playlist.length;
//         loadSong(currentSongIndex);
//         playSong();
//     });

//     volumeControl.addEventListener('input', (e) => {
//         audio.volume = e.target.value / 100;
//     });

//     loadSong(currentSongIndex);
// });

document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('play');
    const albumArt = document.querySelector('.album-art');
    let isPlaying = false;

    function togglePlay() {
        if (isPlaying) {
            playButton.textContent = '▶️';
            albumArt.style.animation = 'none'; 
        } else {
            playButton.textContent = '⏸️'; 
            albumArt.style.animation = 'rotate 7.5s linear infinite'; 
        }
        isPlaying = !isPlaying;
    }

    playButton.addEventListener('click', togglePlay);

    // Font size controls
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
    let currentTheme = 'light'; // default theme

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

    // Set initial theme
    document.body.classList.add(currentTheme + '-theme');
});

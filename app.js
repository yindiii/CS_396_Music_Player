document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const volumeControl = document.getElementById('volume');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');
    const albumArt = document.getElementById('album-art');
    const playlistElement = document.getElementById('playlist');

    const playlist = [
        {
            src: 'path/to/song1.mp3',
            title: 'Song Title 1',
            artist: 'Artist Name 1',
            albumArt: 'path/to/album1.jpg'
        },
        {
            src: 'path/to/song2.mp3',
            title: 'Song Title 2',
            artist: 'Artist Name 2',
            albumArt: 'path/to/album2.jpg'
        },
        // Add more songs here
    ];

    let currentSongIndex = 0;
    const audio = new Audio();

    const loadSong = (index) => {
        const song = playlist[index];
        audio.src = song.src;
        title.textContent = song.title;
        artist.textContent = song.artist;
        albumArt.src = song.albumArt;
        updatePlaylist();
    };

    const updatePlaylist = () => {
        playlistElement.innerHTML = '';
        playlist.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = `${song.title} - ${song.artist}`;
            li.classList.add('playlist-item');
            if (index === currentSongIndex) {
                li.classList.add('active');
            }
            li.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                playSong();
            });
            playlistElement.appendChild(li);
        });
    };

    const playSong = () => {
        audio.play();
        playButton.textContent = '⏸️';
    };

    const pauseSong = () => {
        audio.pause();
        playButton.textContent = '▶️';
    };

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            playSong();
        } else {
            pauseSong();
        }
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
        playSong();
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        playSong();
    });

    volumeControl.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });

    loadSong(currentSongIndex);
});

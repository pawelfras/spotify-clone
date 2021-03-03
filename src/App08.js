import React, { useRef, useState } from "react";
import "./styles.css";

function SongPlayer(props) {
  const audioRef = useRef();
  function play() {
    audioRef.current.play();
  }
  function pause() {
    audioRef.current.pause();
  }
  return (
    <section className="player">
      <h1>Music player</h1>
      <img
        className="cover"
        width="250"
        height="250"
        src={props.song.coverUrl}
        alt="Song cover"
      />
      <div className="buttons">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
      <audio ref={audioRef} key={props.song.audioUrl}>
        <source src={props.song.audioUrl}></source>
      </audio>
    </section>
  );
}

function SongListItem(props) {
  return (
    <li
      className={`song-list-item  ${props.isCurrent ? " selected" : ""}`}
      onClick={() => props.onSelectSong(props.song.audioUrl)}
    >
      {props.song.title} by {props.song.artist}
    </li>
  );
}

export default function App() {
  const songs = [
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
      title: "Deadfro5h",
      artist: "starfrosh"
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/majesty.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/majesty.jpg",
      title: "Majesty (Original Mix)",
      artist: "Ryan Craig Martin"
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/runs.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/runs.jpg",
      title: "Runs",
      artist: "Wowa"
    }
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  function selectSong(selectedSongUrl) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSongUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }
  function selectNextSong() {
    setCurrentSongIndex(
      (currentSongIndex) => (currentSongIndex + 1) % songs.length
    );
  }
  function selectPrevSong() {
    setCurrentSongIndex(
      (currentSongIndex) => (currentSongIndex + songs.length - 1) % songs.length
    );
  }
  return (
    <div className="App">
      <SongPlayer
        song={currentSong}
        onPreviousSong={selectPrevSong}
        onNextSong={selectNextSong}
      />
      <section className="songs">
        <h2>Songs</h2>
        <ul className="song-list">
          {songs.map((song) => (
            <SongListItem
              key={song.audioUrl}
              song={song}
              isCurrent={song.audioUrl === currentSong.audioUrl}
              onSelectSong={selectSong}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

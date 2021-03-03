import { useEffect, useRef, useState } from "react";
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
    <section className="Player">
      <h1>Music player</h1>
      <img
        width="250"
        height="250"
        src={props.song.coverUrl}
        alt="Song cover"
      />
      <div className="buttons">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
      <audio ref={audioRef} key={props.song.audioUrl} loop>
        <source src={props.song.audioUrl}></source>
      </audio>
    </section>
  );
}

function SongListItem(props) {
  return (
    <li
      className={`SongListItem  ${props.isCurrent ? " selected" : ""}`}
      onClick={() => props.onSelectSong(props.song.audioUrl)}
    >
      {props.song.title} by {props.song.artist}
    </li>
  );
}

export default function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs";

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs);
      }
    });
  }, []);

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
  return (
    <div className="App">
      {songs.length === 0 ? (
        "Loading songs..."
      ) : (
        <>
          <SongPlayer song={currentSong} />

          <section className="Songs">
            <h2>Songs</h2>
            <ul>
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
        </>
      )}
    </div>
  );
}

import React from "react";
import "./styles.css";

function SongPlayer(props) {
  return (
    <section>
      <h1>Music player</h1>
      <img
        width="250"
        height="250"
        src={props.song.coverUrl}
        alt="Song cover"
      />
      <audio controls>
        <source src={props.song.audioUrl} />
      </audio>
    </section>
  );
}

export default function App() {
  const currentSong = {
    audioUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
    coverUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
    title: "Deadfro5h",
    artist: "starfrosh"
  };

  return (
    <div className="App">
      <SongPlayer song={currentSong} />
    </div>
  );
}

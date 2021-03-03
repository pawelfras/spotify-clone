import React from "react";
import "./styles.css";

function SongPlayer(props) {
  return (
    <section>
      <h1>Music player</h1>
      <img
        className="cover"
        width="250"
        height="250"
        src={props.song.coverUrl}
        alt="Song cover"
      />
      <audio key={props.song.audioUrl} controls>
        <source src={props.song.audioUrl}></source>
      </audio>
    </section>
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
  const currentSong = songs[2];

  return (
    <div className="App">
      <SongPlayer song={currentSong} />
    </div>
  );
}

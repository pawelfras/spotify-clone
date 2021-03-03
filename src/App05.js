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

function SongListItem(props) {
  return (
    <li style={{ background: props.isCurrent ? "orangered" : "" }}>
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
  const currentSong = songs[1];

  return (
    <div className="App">
      <SongPlayer song={currentSong} />
      <section>
        <h2>Songs</h2>
        <ul>
          {songs.map((song) => (
            <SongListItem
              key={song.audioUrl}
              song={song}
              isCurrent={song.audioUrl === currentSong.audioUrl}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

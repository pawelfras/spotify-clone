import React from "react";
import "./styles.css";

function SongPlayer(props) {
  return (
    <section>
      <h1>Music player</h1>
      <audio controls>
        <source src={props.audioUrl} />
      </audio>
    </section>
  );
}

export default function App() {
  const audioUrl = "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3";

  return (
    <div className="App">
      <SongPlayer audioUrl={audioUrl} />
    </div>
  );
}

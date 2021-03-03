import React from "react";
import "./styles.css";

export default function App() {
  const audioUrl = "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3";

  return (
    <div className="App">
      <section>
        <h1>Music player</h1>
        <audio controls>
          <source src={audioUrl} />
        </audio>
      </section>
    </div>
  );
}

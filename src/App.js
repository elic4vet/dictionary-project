import logo from "./eli_logo4.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary
          defaultKeyword="sunset
      "
        />
      </main>

      <footer className="App-footer">
        ✌️ This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/elisavet-erkekoglou-80514b107/"
          target="_blank"
          rel="noreferrer"
        >
          Elisabeth
        </a>
        👩‍💻 and it is{" "}
        <a
          href="https://github.com/elic4vet/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}

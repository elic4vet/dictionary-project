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
        <Dictionary defaultKeyword="hello" />
      </main>

      <footer className="App-footer">Coded by Elisabeth Erkekoglou </footer>
    </div>
  );
}

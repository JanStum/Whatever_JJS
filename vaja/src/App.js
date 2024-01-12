import logo from './source_files/logo.svg';
import './App.css';
function Neke() {
  return (
    <>
      <div>
        <p>
          Neki tekst druge funkcije
        </p>
      </div>
      <span>Nekaj</span>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

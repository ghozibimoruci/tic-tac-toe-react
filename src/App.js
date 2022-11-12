// import logo from './logo.svg';
import './App.css';
// import TicTacToe from './pages/tic-tac-toe/TicTactToe';
// import TicTacToeBlack from './pages/tic-tac-toe-black/TicTactToeBlack';
import { CompanyTower } from './pages/company-tower/company-tower';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <TicTacToe/> */}
      {/* <TicTacToeBlack/> */}
      <CompanyTower/>
    </div>
  );
}

export default App;

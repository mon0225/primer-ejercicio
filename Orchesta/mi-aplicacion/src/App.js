import React from 'react';
import NavBar from './components/navBar'
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>
            ORCHESTA
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <Routes/>
    </div>
  );
}

export default App;

// src/App.js
import './App.css'
import React from "react";
import PlayersList from './components/PlayerList';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <h1>Player App</h1>
      <PlayersList/>
    </div>
  );
};

export default App;
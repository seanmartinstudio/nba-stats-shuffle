import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const[player, setPlayer] = useState([])
  const[stats, setStats] = useState([])
 
  useEffect(() => {
    Promise.all([
      fetch('https://www.balldontlie.io/api/v1/players/237'),
      fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&postseason=true'),
    ])
    .then(([resPlayer, resStats]) => 
        Promise.all([resPlayer.json(), resStats.json()])
      )
    .then(([dataPlayer, dataStats]) => {
      setPlayer(dataPlayer)
      setStats(dataStats)
    })
  },[])

  console.log("Player", player)
  console.log("Stats", stats)

  return (
<h1>Hello World!</h1>
  )
}


export default App;

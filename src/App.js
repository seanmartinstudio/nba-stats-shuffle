import './App.css';
import React, { useState, useEffect } from 'react';
import Container from './Container';

function App() {
  const[profile, setProfile] = useState([])
  const[stats, setStats] = useState([])
  const[team, setTeam] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState('Shaquille Harrison')

  const handleSelectedPlayer = ((event) => setSelectedPlayer(event.target.value))

  useEffect(() => {
    Promise.all([
      fetch(`https://www.balldontlie.io/api/v1/players?search=${selectedPlayer}`),
      fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237'),
    ])
    .then(([resProfile, resStats]) => 
        Promise.all([resProfile.json(), resStats.json()])
      )
    .then(([dataProfile, dataStats]) => {
      setProfile(dataProfile.data[0])
      setStats(dataStats.data[0])
      setTeam(dataProfile.data[0].team)
    })
  },[selectedPlayer])

  console.log("Profile ->", profile)
  console.log("Stats ->", stats)
  console.log("Team ->", team)

  return (
  <div>
    <Container profile={profile} stats={stats} team={team} />
  <form>
  <label for="player-select">Select a player:</label>
  <select id="player-select" onChange={handleSelectedPlayer}>
    {/* <option value="">--Select a player--</option> */}
    <option value="Shaquille Harrison" selected>Shaquille Harrison</option>
    <option value="D'Angelo Russell">D'Angelo Russell</option>
    <option value="Jarred Vanderbilt">Jarred Vanderbilt</option>
    <option value="Anthony Davis">Anthony Davis</option>
    <option value="Lonnie Walker IV">Lonnie Walker IV</option>
    <option value="Malik Beasley">Malik Beasley</option>
    <option value="LeBron James">LeBron James</option>
    <option value="Troy Brown Jr.">Troy Brown Jr.</option>
    <option value="Tristan Thompson">Tristan Thompson</option>
    <option value="Max Christie">Max Christie</option>
    <option value="Mo Bamba">Mo Bamba</option>
    <option value="Scotty Pippen Jr.">Scotty Pippen Jr.</option>
    <option value="Austin Reaves">Austin Reaves</option>
    <option value="Dennis Schroder">Dennis Schroder</option>
    <option value="Cole Swider">Cole Swider</option>
    <option value="Rui Hachimura">Rui Hachimura</option>
    <option value="Wenyen Gabriel">Wenyen Gabriel</option>
  </select>
</form>
  </div>
  )
}

//array of players if needed in the future
const lakersRoster = [
  "Shaquille_Harrison", "D'Angelo_Russell", "Jarred_Vanderbilt", "Anthony_Davis", "Lonnie_Walker_IV",
  "Malik_Beasley", "LeBron_James", "Troy_Brown_Jr.", "Tristan_Thompson", "Max_Christie", "Mo_Bamba",
  "Scotty_Pippen_Jr.", "Austin_Reaves", "Dennis_Schroder", "Cole_Swider", "Rui_Hachimura", "Wenyen_Gabriel"
]


export default App;

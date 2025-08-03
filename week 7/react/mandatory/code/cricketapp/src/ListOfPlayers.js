import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Dhoni", score: 65 },
    { name: "Rahul", score: 55 },
    { name: "Pant", score: 70 },
    { name: "Shreyas", score: 72 },
    { name: "Jadeja", score: 45 },
    { name: "Ashwin", score: 80 },
    { name: "Bumrah", score: 60 },
    { name: "Shami", score: 85 },
    { name: "Kuldeep", score: 68 }
  ];


  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with Score &lt; 70</h3>
      <ul>
        {filteredPlayers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

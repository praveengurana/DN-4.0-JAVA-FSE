import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Dhoni", "Pant", "Jadeja", "Shami"];
  const evenTeam = ["Rohit", "Rahul", "Shreyas", "Ashwin", "Bumrah", "Kuldeep"];

  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  const T20Players = ["Rohit", "Pant", "Rahul"];
  const RanjiTrophyPlayers = ["Pujara", "Karun Nair", "Suryakumar"];

  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {restOdd.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {restEven.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>List of Indian Players Merged</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;

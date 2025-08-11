import React, { useState } from 'react';
import './ResultsPage.css';

const ResultsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const years = ['2024', '2023', '2022', '2021', '2020'];

  const leaderboards = {
    overall: [
      { rank: 1, name: 'Team Alpha', points: 285, family: 'Smith Family' },
      { rank: 2, name: 'Team Beta', points: 267, family: 'Johnson Family' },
      { rank: 3, name: 'Team Gamma', points: 243, family: 'Williams Family' },
      { rank: 4, name: 'Team Delta', points: 198, family: 'Brown Family' },
      { rank: 5, name: 'Team Epsilon', points: 176, family: 'Davis Family' }
    ],
    individual: [
      { rank: 1, name: 'Sarah Smith', points: 98, events: 4 },
      { rank: 2, name: 'Mike Johnson', points: 87, events: 3 },
      { rank: 3, name: 'Lisa Williams', points: 82, events: 4 },
      { rank: 4, name: 'Tom Brown', points: 75, events: 2 },
      { rank: 5, name: 'Amy Davis', points: 71, events: 3 }
    ]
  };

  const eventResults = [
    {
      event: 'Family Trivia Challenge',
      date: '2024-07-15',
      winner: 'Team Alpha',
      score: '95/100',
      participants: 20
    },
    {
      event: 'Basketball Tournament',
      date: '2024-07-16',
      winner: 'Team Beta',
      score: '68-62',
      participants: 16
    },
    {
      event: 'Cooking Competition',
      date: '2024-07-16',
      winner: 'Team Gamma',
      score: '9.2/10',
      participants: 12
    },
    {
      event: 'Talent Show',
      date: '2024-07-17',
      winner: 'Team Alpha',
      score: '8.8/10',
      participants: 18
    }
  ];

  const familyStats = [
    { family: 'Smith Family', members: 8, wins: 12, totalPoints: 1247 },
    { family: 'Johnson Family', members: 6, wins: 8, totalPoints: 1098 },
    { family: 'Williams Family', members: 7, wins: 6, totalPoints: 987 },
    { family: 'Brown Family', members: 5, wins: 4, totalPoints: 756 },
    { family: 'Davis Family', members: 4, wins: 3, totalPoints: 623 }
  ];

  return (
    <div className="results-page">
      <div className="container">
        <header className="page-header">
          <h1>Results & Statistics</h1>
          <p>Track the competition results and family achievements</p>
          
          <div className="year-selector">
            <label htmlFor="year-select">View results for: </label>
            <select 
              id="year-select"
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </header>

        <div className="results-grid">
          <section className="leaderboard-section">
            <h2>Team Leaderboard</h2>
            <div className="leaderboard">
              {leaderboards.overall.map(team => (
                <div key={team.rank} className={`leaderboard-item ${team.rank <= 3 ? `rank-${team.rank}` : ''}`}>
                  <div className="rank">{team.rank}</div>
                  <div className="team-info">
                    <h3>{team.name}</h3>
                    <p>{team.family}</p>
                  </div>
                  <div className="points">{team.points} pts</div>
                  {team.rank === 1 && <div className="trophy">🏆</div>}
                  {team.rank === 2 && <div className="trophy">🥈</div>}
                  {team.rank === 3 && <div className="trophy">🥉</div>}
                </div>
              ))}
            </div>
          </section>

          <section className="individual-section">
            <h2>Individual Leaders</h2>
            <div className="leaderboard">
              {leaderboards.individual.map(player => (
                <div key={player.rank} className={`leaderboard-item ${player.rank <= 3 ? `rank-${player.rank}` : ''}`}>
                  <div className="rank">{player.rank}</div>
                  <div className="player-info">
                    <h3>{player.name}</h3>
                    <p>{player.events} events</p>
                  </div>
                  <div className="points">{player.points} pts</div>
                  {player.rank === 1 && <div className="trophy">🏆</div>}
                  {player.rank === 2 && <div className="trophy">🥈</div>}
                  {player.rank === 3 && <div className="trophy">🥉</div>}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="event-results-section">
          <h2>Event Results</h2>
          <div className="events-results-grid">
            {eventResults.map((result, index) => (
              <div key={index} className="event-result-card">
                <h3>{result.event}</h3>
                <div className="result-details">
                  <div className="detail-row">
                    <span className="label">Date:</span>
                    <span>{new Date(result.date).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Winner:</span>
                    <span className="winner">{result.winner}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Score:</span>
                    <span>{result.score}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Participants:</span>
                    <span>{result.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="family-stats-section">
          <h2>Family Statistics</h2>
          <div className="stats-table">
            <div className="table-header">
              <div>Family</div>
              <div>Members</div>
              <div>Total Wins</div>
              <div>Total Points</div>
              <div>Avg Points/Member</div>
            </div>
            {familyStats.map((family, index) => (
              <div key={index} className="table-row">
                <div className="family-name">{family.family}</div>
                <div>{family.members}</div>
                <div>{family.wins}</div>
                <div>{family.totalPoints}</div>
                <div>{Math.round(family.totalPoints / family.members)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements-section">
          <h2>Special Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Most Improved</h3>
              <p>Team Delta</p>
              <span>+47 points from last year</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎯</div>
              <h3>Perfect Score</h3>
              <p>Sarah Smith</p>
              <span>100% in Trivia Challenge</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🔥</div>
              <h3>Winning Streak</h3>
              <p>Team Alpha</p>
              <span>3 consecutive wins</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎪</div>
              <h3>Best Performer</h3>
              <p>Mike Johnson</p>
              <span>Talent Show winner</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultsPage;
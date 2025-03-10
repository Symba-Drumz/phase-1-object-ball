//  Basketball Game Data
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 11,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Game Functions
  
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
      const team = game[teamKey];
      if (team.players[playerName]) {
        return team.players[playerName].points;
      }
    }
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
      const team = game[teamKey];
      if (team.players[playerName]) {
        return team.players[playerName].shoe;
      }
    }
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) {
        return team.colors;
      }
    }
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
      const team = game[teamKey];
      if (team.teamName === teamName) {
        return Object.values(team.players).map(player => player.number);
      }
    }
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
      const team = game[teamKey];
      if (team.players[playerName]) {
        return team.players[playerName];
      }
    }
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = 0;
    let rebounds = 0;
  
    for (let teamKey in game) {
      const players = game[teamKey].players;
      for (let player in players) {
        if (players[player].shoe > biggestShoe) {
          biggestShoe = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }
  
    return rebounds;
  }
  
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topScorer = "";
  
    for (let teamKey in game) {
      const players = game[teamKey].players;
      for (let player in players) {
        if (players[player].points > maxPoints) {
          maxPoints = players[player].points;
          topScorer = player;
        }
      }
    }
  
    return topScorer;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homeTotal = 0;
    let awayTotal = 0;
  
    for (let player in game.home.players) {
      homeTotal += game.home.players[player].points;
    }
  
    for (let player in game.away.players) {
      awayTotal += game.away.players[player].points;
    }
  
    return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (let teamKey in game) {
      const players = game[teamKey].players;
      for (let player in players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    return longestName;
  }
  
  function doesLongNameStealATon() {
    const game = gameObject();
    const longNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    let topThief = "";
  
    for (let teamKey in game) {
      const players = game[teamKey].players;
      for (let player in players) {
        if (players[player].steals > maxSteals) {
          maxSteals = players[player].steals;
          topThief = player;
        }
      }
    }
  
    return topThief === longNamePlayer;
  }
  
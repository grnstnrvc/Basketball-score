let team1Points = [];
let team2Points = [];

function addPoint(teamNum, pointValue) {
  let d = new Date();
  let timestamp = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  
  if (teamNum === 1) {
    team1Points.push({value: pointValue, time: timestamp});
  } else if (teamNum === 2) {
    team2Points.push({value: pointValue, time: timestamp});
  }
}

function printPoints() {
  console.log("Team 1 Points:");
  team1Points.forEach(point => {
    console.log(point.value + " point(s) at " + point.time);
  });
  
  console.log("Team 2 Points:");
  team2Points.forEach(point => {
    console.log(point.value + " point(s) at " + point.time);
  });
}

// Example usage:
addPoint(1, 2); // Adds 2 points to team 1
addPoint(2, 3); // Adds 3 points to team 2
addPoint(1, 1); // Adds 1 point to team 1
printPoints();  // Prints the current scores for both teams

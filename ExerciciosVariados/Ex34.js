// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function calculatePoints(matches) {
    let points = 0;

    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        const [x, y] = match.split(':').map(Number);

        if (x > y) {
            points += 3; // Win
        } else if (x < y) {
            // Loss - do nothing as points remain 0
        } else {
            points += 1; // Tie
        }
    }

    return points;
}

// Example usage:
const matches = ["3:1", "2:2", "0:1", "1:0", "4:2", "2:3", "3:3", "1:1", "0:0", "4:0"];
const totalPoints = calculatePoints(matches);
console.log(`Total points: ${totalPoints}`);
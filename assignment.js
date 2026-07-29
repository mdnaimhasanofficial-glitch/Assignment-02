function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here…
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
        return "Invalid";
    }else if( teamAGoals > teamBGoals){
        return "Team A Won";
        // console.log("Team A Won");
    }else if(teamAGoals < teamBGoals){
        return "Team B Won";
        // console.log("Team B Won");
    }else {
        return "Draw"
    }
}

let input1 = matchWinner(2,1);
let input2 = matchWinner(1,3);
let input3 = matchWinner(2,2);
let input4 = matchWinner("3",2);

// console.log(input1);
// console.log(input2);
// console.log(input3);
// console.log(input4);


// Second Problem

function isElevatorSafe(weights) {
    // Write your code here
    let totalWeight = 0;
    for(let weight of weights){
        // console.log(weight);
        totalWeight += weight;
        // console.log(totalWeight);
    }
    // return totalWeight;
    if(!Array.isArray(weights)){
            return "Invalid"
        }else if(totalWeight <= 400){
            return true;
        }else{
            return false
        }
    

}
console.log(isElevatorSafe([60, 75, 50]));
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));

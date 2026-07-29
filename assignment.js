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

console.log(input1);
console.log(input2);
console.log(input3);
console.log(input4);

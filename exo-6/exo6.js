// Cours 8 de Codecademy

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = 1;
console.log(joeInfo);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

joeInfo.garage = true;
console.log(joeInfo);

let team = {
    players:[{
        firstName: "Pablo",
        lastName:"Sanchez",
        age: 11
    }],

    games:[{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }],

    addPlayers(firstName, lastName, age){
        team.players.push({firstName,lastName, age});
    },
    
    addGames(opponent, teamPoints, opponentPoints){
        team.games.push({opponent,teamPoints, opponentPoints});
    }
};

team.addPlayers("Paul","Dupont", 12);
team.addPlayers("Pierre","Durant", 15);
team.addPlayers("Jacques","Duvent", 16);
team.addPlayers("George","Dupuis", 13);
team.addGames("Paris",78,45);
team.addGames("Lyon",25,53);
team.addGames("Marseille",17,39);
team.addGames("Valence",82,83);

console.log(team);

let sum = 0;

team.games.forEach(function(e){
    console.log(e.teamPoints);
    sum += e.teamPoints;
});

console.log(sum);

let sum2 = 0;
let avg = 0;

team.games.forEach(function(e){
    console.log(e.opponentPoints);
    sum2 += e.opponentPoints;
    avg ++;
})

console.log(sum2/avg);

function oldest(){
        
    let oldestPlayer =  team.players[0];
    team.players.forEach(function(e){
        if(e.age>oldestPlayer.age){
            oldestPlayer = e;
        }
    });
    return console.log(oldestPlayer)
}

oldest()



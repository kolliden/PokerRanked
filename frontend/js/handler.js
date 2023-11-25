// const actions = ["fold", "check", "call", "raise"]

const callBtn = document.getElementById("callBtn");
const raiseBtn = document.getElementById("raiseBtn");
const raiseInput = document.getElementById("raiseInput");
const foldBtn = document.getElementById("foldBtn");
const checkBtn = document.getElementById("checkBtn");
const betBtn = document.getElementById("betBtn");

const player1 = document.getElementById("playerPosition1");
const player2 = document.getElementById("playerPosition2");
const player3 = document.getElementById("playerPosition3");
const player4 = document.getElementById("playerPosition4");
const player5 = document.getElementById("playerPosition5");
const player6 = document.getElementById("playerPosition6");

let playerTurn = true;

let gameState = {
    players: [{
        name: "YOU",
        chips: 2000,
        cards: [],
        playerTurn: true,
        playerAction:"Bet 12412",
        },{
        name: "Poker God1224",
        chips: 2000,
        cards: [],
        playerTurn: false,
        playerAction:"Bet 12412",
        },
        {
        name: "FishOfPoker",
        chips: 2000,
        cards: [],
        playerTurn: false,
        playerAction:"Bet 12412",
        },
        {
        name: "MegaShark",
        chips: 2000,
        cards: [],
        playerTurn: false,
        playerAction:"Bet 12412",
        },{
        name: "WinnerWinner",
        chips: 2000,
        cards: [],
        playerTurn: false,
        playerAction:"Bet 12412",
        },{
        name: "Runner6000",
        chips: 2000,
        cards: [],
        playerTurn: false,
        playerAction:"Bet 12412",
        }
    ],
    pot: 0,
    board: [],
    lastBet: 0,
}

function stopGame() {
    clearInterval(myInterval);
}
// check what actions are possible
function getPossibleActions() {
    let possibeActions = [];
    if (gameState.lastBet == 0) {
        possibeActions.push("check");
        possibeActions.push("bet");
    } else {
        possibeActions.push("fold");
        possibeActions.push("call");
        possibeActions.push("raise");
    }
    return possibeActions;
}

function updateButtons(possibeActions) {
    if (!playerTurn) {
        callBtn.classList.add("hidden");
        raiseBtn.classList.add("hidden");
        checkBtn.classList.add("hidden");
        betBtn.classList.add("hidden");
        foldBtn.classList.add("hidden");
        raiseInput.classList.add("hidden");
        return;
    }

    if (possibeActions.includes("fold")) {
        foldBtn.classList.remove("hidden");
    } else {
        foldBtn.classList.add("hidden");
    }
    if (possibeActions.includes("check")) {
        checkBtn.classList.remove("hidden");
    } else {
        checkBtn.classList.add("hidden");
    }
    if (possibeActions.includes("call")) {
        callBtn.classList.remove("hidden");
    } else {
        callBtn.classList.add("hidden");
    }
    if (possibeActions.includes("raise")) {
        raiseBtn.classList.remove("hidden");
        raiseInput.classList.remove("hidden");
    } else {
        raiseInput.classList.add("hidden");
    }
    if (possibeActions.includes("bet")) {
        betBtn.classList.remove("hidden");
        raiseInput.classList.remove("hidden");
    } else {
        betBtn.classList.add("hidden");
    }
}
function updateTable() {
    for (var i = 0; i < gameState.board.length; i++) {
        let card = gameState.board[i];
        let cardHTML = document.getElementById("card" + i);
        cardHTML.classList.remove("hidden");
        cardHTML.src = "assets/cards/" + card + ".png";
    }
    for (var i = 0; i < gameState.players.length; i++) {
        let player = gameState.players[i];
        let playerHTML = document.getElementById("playerPosition" + (i+1).toString());
        playerHTML.classList.remove("hidden");
        // playerHTML.innerHTML = player.name + " " + player.chips + " " + player.playerAction;
        // let card1HTML = document.getElementById("card" + i + "1");
        // let card2HTML = document.getElementById("card" + i + "2");

        // card1HTML.classList.remove("hidden");
        // card2HTML.classList.remove("hidden");
        // card1HTML.src = "assets/cards/" + player.cards[0] + ".png";
        // card2HTML.src = "assets/cards/" + player.cards[1] + ".png";
        playerHTML.querySelector(".player-info-wrapper").querySelector(".player-action").textContent = player.playerAction;

        if (player.playerTurn) {
            playerHTML.querySelector(".player-info-wrapper").querySelector(".player-action").classList.add("active");
        } else {
            playerHTML.querySelector(".player-info-wrapper").querySelector(".player-action").classList.remove("active");
        }

    }

}


function mainLoop() {
    // check what actions are possible
    let possibleActions = getPossibleActions();
    updateButtons(possibleActions);
    updateTable();
}


var myInterval = setInterval(mainLoop, 1000);

// // Fetch example to get all games
// fetch('/api/games/')
//   .then(response => response.json())
//   .then(data => {
//     // Handle retrieved game data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle error
//     console.error('Error:', error);
//   });

// // Fetch example to create a new game
// const newGame = {
//   // Your game data here
// };
// fetch('/api/games/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(newGame),
// })
// .then(response => response.json())
// .then(data => {
//   // Handle created game data
//   console.log(data);
// })
// .catch(error => {
//   // Handle error
//   console.error('Error:', error);
// });


// const gameID = 1; // Example game ID
// const socket = new WebSocket(`localhost:2352/api/game/${gameID}/`);

// socket.onopen = () => {
//   console.log('WebSocket connected');
// };

// socket.onerror = (error) => {
//   console.error('WebSocket error:', error);
// };

// socket.onmessage = (event) => {
//   const data = JSON.parse(event.data);
//   // Handle incoming WebSocket data
//   console.log('Received data:', data);

//     // Handle WebSocket data
//     if (data.action == "update") {
//         // update game state
//         // update player state
//         // update buttons
//         // update table
//     }
// };

// // Sending a message through WebSocket
// const message = {
//   action: 'make_move',
//   // Your action data here
// };
// socket.send(JSON.stringify(message));
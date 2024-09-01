// Getting the elements from the HTML
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#select-players-buttons button");
let messageContainer = document.querySelector("#end-message");
let messageText = document.querySelector("#end-message p");

// Computer
let secondPlayer;

// Counter variables to track the quantity of player moves
let p1Plays = 0;
let p2Plays = 0;


// MAIN GAME LOGIC STRUCTURE
// Logic: the 'for' loop iterates through the boxes, adding an eventListener for a 'click' action to each of them
    // When one of the boxes is clicked, checkTurns() is called to see which player's turn it was
    // checkTurns() returns which element should be added to the box ('x' or 'o'), and a copy of it gets appended to the box-node
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        let el = checkTurns(p1Plays, p2Plays);

        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            if (p1Plays == p2Plays) {
                p1Plays++;
                
                if (secondPlayer == 'player-vs-computer') {
                    computerPlayer();
                    p2Plays++;
                }

            } else {
                p2Plays++;
            }

            checkWin();
        }
    });
}


// Checks if the selected option is Player vs Player or Player vs Computer
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id");

        // Hiding the buttons
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        // Making game board show up
        setTimeout(function () {
            let gameContainer = document.querySelector("#hideable-items-container");
            gameContainer.classList.remove("hide");
        });
    });
}


// Generating the computer's moves
function computerPlayer() {
    let cloneO = o.cloneNode(true);
    p2MovesCounter = 0;
    boxesFilled = 0;

    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        // Move only happens on that specific box if that box is empty
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                p2MovesCounter++;
                break;
            }
        } else {
            boxesFilled++;
        }
    }

    if (p2MovesCounter == 0 && boxesFilled < 9) {
        computerPlayer();
    }
}


// Function to check which player is next
// Logic: If the amount of turns is the same between the two players, it's P1's turn; if not, it's P2's turn.
function checkTurns(p1Plays, p2Plays) {
    if (p1Plays == p2Plays) {
        el = x;
    } else {
        el = o;
    }

    return el;
}


// Function to check who won the game
function checkWin() {
    let blockOne = document.getElementById("block-1");
    let blockTwo = document.getElementById("block-2");
    let blockThree = document.getElementById("block-3");
    let blockFour = document.getElementById("block-4");
    let blockFive = document.getElementById("block-5");
    let blockSix = document.getElementById("block-6");
    let blockSeven = document.getElementById("block-7");
    let blockEight = document.getElementById("block-8");
    let blockNine = document.getElementById("block-9");

    // Checking for Horizontal win
    // BLOCKS 1-2-3
    if (blockOne.childNodes.length > 0 && blockTwo.childNodes.length > 0 && blockThree.childNodes.length > 0) {
        let b1Child = blockOne.childNodes[0].className;
        let b2Child = blockTwo.childNodes[0].className;
        let b3Child = blockThree.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declareWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o');
        }
    }

    // BLOCKS 4-5-6
    if (blockFour.childNodes.length > 0 && blockFive.childNodes.length > 0 && blockSix.childNodes.length > 0) {
        let b4Child = blockFour.childNodes[0].className;
        let b5Child = blockFive.childNodes[0].className;
        let b6Child = blockSix.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o');
        }
    }

    // BLOCKS 7-8-9
    if (blockSeven.childNodes.length > 0 && blockEight.childNodes.length > 0 && blockNine.childNodes.length > 0) {
        let b7Child = blockSeven.childNodes[0].className;
        let b8Child = blockEight.childNodes[0].className;
        let b9Child = blockNine.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }


    // Checking for Vertical win
    // BLOCKS 1-4-7
    if (blockOne.childNodes.length > 0 && blockFour.childNodes.length > 0 && blockSeven.childNodes.length > 0) {
        let b1Child = blockOne.childNodes[0].className;
        let b4Child = blockFour.childNodes[0].className;
        let b7Child = blockSeven.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }

    // BLOCKS 2-5-8
    if (blockTwo.childNodes.length > 0 && blockFive.childNodes.length > 0 && blockEight.childNodes.length > 0) {
        let b2Child = blockTwo.childNodes[0].className;
        let b5Child = blockFive.childNodes[0].className;
        let b8Child = blockEight.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o');
        }
    }

    // BLOCKS 3-6-9
    if (blockThree.childNodes.length > 0 && blockSix.childNodes.length > 0 && blockNine.childNodes.length > 0) {
        let b3Child = blockThree.childNodes[0].className;
        let b6Child = blockSix.childNodes[0].className;
        let b9Child = blockNine.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }


    // Checking for Diagonal win
    // BLOCKS 1-5-9
    if (blockOne.childNodes.length > 0 && blockFive.childNodes.length > 0 && blockNine.childNodes.length > 0) {
        let b1Child = blockOne.childNodes[0].className;
        let b5Child = blockFive.childNodes[0].className;
        let b9Child = blockNine.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }

    // BLOCKS 3-5-7
    if (blockThree.childNodes.length > 0 && blockFive.childNodes.length > 0 && blockSeven.childNodes.length > 0) {
        let b3Child = blockThree.childNodes[0].className;
        let b5Child = blockFive.childNodes[0].className;
        let b7Child = blockSeven.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declareWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }


    // Variable to track the amount of moves
    // If the counter reaches the value of 9, it's a tie
    let moveCounter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            moveCounter++;
        }
    }

    if (moveCounter == 9) {
        declareWinner();
    }
}


// Function to show a message with the winner, update the scoreboard and clear the game board
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#x-points");
    let scoreboardO = document.querySelector("#o-points");
    let endMessage = '';

    // Updating the points on the scoreboard
    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        endMessage = "Player 1 (X) wins!";
    } else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        endMessage = "Player 2 (O) wins!";
    } else {
        // add ties counter here
        endMessage = "It's a tie!";
    }

    // Shows end message on the screen
    // 'hide' class is dinamically removed when the game ends to the messages can be shown
    // After 3 seconds, 'hide' is added to the message again
    messageText.innerHTML = endMessage;
    messageContainer.classList.remove("hide");
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000);

    // Clearing the board
    p1Plays = 0;
    p2Plays = 0;
    let boxesToRemove = document.querySelectorAll(".box div");
    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}
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

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        let el = checkTurns(p1Plays, p2Plays);

        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            // Registers players' moves
            if (p1Plays == p2Plays) {
                p1Plays++;
            } else {
                p2Plays++;
            }

            checkWin();
        }
    });
}


// Function to check which player is next
// Logic: If the amount of turns is the same between the two players, it's P1's turn
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
            console.log('x wins');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            console.log('o wins');
        }
    }

    // BLOCKS 4-5-6
    if (blockFour.childNodes.length > 0 && blockFive.childNodes.length > 0 && blockSix.childNodes.length > 0) {
        let b4Child = blockFour.childNodes[0].className;
        let b5Child = blockFive.childNodes[0].className;
        let b6Child = blockSix.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            console.log('x wins');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            console.log('o wins');
        }
    }

    // BLOCKS 7-8-9
    if (blockSeven.childNodes.length > 0 && blockEight.childNodes.length > 0 && blockNine.childNodes.length > 0) {
        let b7Child = blockSeven.childNodes[0].className;
        let b8Child = blockEight.childNodes[0].className;
        let b9Child = blockNine.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            console.log('x wins');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            console.log('o wins');
        }
    }


    // Checking for Vertical win
    // BLOCKS 1-4-7
    if (blockOne.childNodes.length > 0 && blockFour.childNodes.length > 0 && blockSeven.childNodes.length > 0) {
        let b1Child = blockOne.childNodes[0].className;
        let b4Child = blockFour.childNodes[0].className;
        let b7Child = blockSeven.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            console.log('x wins');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            console.log('o wins');
        }
    }

    // BLOCKS 2-5-8
    if (blockTwo.childNodes.length > 0 && blockFive.childNodes.length > 0 && blockEight.childNodes.length > 0) {
        let b2Child = blockTwo.childNodes[0].className;
        let b5Child = blockFive.childNodes[0].className;
        let b8Child = blockEight.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            console.log('x wins');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            console.log('o wins');
        }
    }

    // BLOCKS 3-6-9
    if (blockThree.childNodes.length > 0 && blockSix.childNodes.length > 0 && blockNine.childNodes.length > 0) {
        let b3Child = blockThree.childNodes[0].className;
        let b6Child = blockSix.childNodes[0].className;
        let b9Child = blockNine.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            console.log('x wins');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            console.log('o wins');
        }
    }


    // Checking for Diagonal win
    // BLOCKS 1-5-9
    if (blockOne.childNodes.length > 0 && blockFive.childNodes.length > 0 && blockNine.childNodes.length > 0) {
        let b1Child = blockOne.childNodes[0].className;
        let b5Child = blockFive.childNodes[0].className;
        let b9Child = blockNine.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            console.log('x wins');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            console.log('o wins');
        }
    }

    // BLOCKS 3-5-7
    if (blockThree.childNodes.length > 0 && blockFive.childNodes.length > 0 && blockSeven.childNodes.length > 0) {
        let b3Child = blockThree.childNodes[0].className;
        let b5Child = blockFive.childNodes[0].className;
        let b7Child = blockSeven.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            console.log('x wins');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            console.log('o wins');
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
        console.log("it's a tie");
    }
}
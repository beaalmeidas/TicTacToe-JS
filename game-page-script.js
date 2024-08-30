let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#select-players-buttons button");
let messageContainer = document.querySelector("#end-message");
let messageText = document.querySelector("#end-message p");
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
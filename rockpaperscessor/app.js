
let user = 0;
let user2 = 0;
let buttons = document.querySelectorAll(".btn");
let changePara = document.querySelector("#msg");
let userP = document.querySelector("#user")
let compP = document.querySelector("#comp")
userP.innerText = 0 ;
compP.innerText = 0 ;
let boxcolor = document.querySelector(".result");

const randomno = () => {
    const arr = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return arr[random];
}

const draw = () => {
    console.log("Match is a draw");
    changePara.innerText = "it's a draw :)"
    boxcolor.style.background = "yellow";
    boxcolor.style.color = "black";
}

const playgame = (userchoice, compchoice) => {
    console.log("User chose =", userchoice);
    console.log("Computer chose =", compchoice);

    if (userchoice === compchoice) {
        draw();
    } else {
        let win = true;
        if (userchoice === "paper") {
            if (compchoice === "scissor") {
                console.log("You lose");
                changePara.innerText = "you lose"
                compP.innerText = parseInt(compP.innerText) + 1 ;
                win = false;
                boxcolor.style.background = "red";
                boxcolor.style.color = "black";
            } else {
                userP.innerText = parseInt(userP.innerText) + 1 ;
                console.log("You won");
                changePara.innerText = "you won"
                win = true;
                boxcolor.style.background = "green";
                boxcolor.style.color = "black";
            }
        } else if (userchoice === "rock") {
            if (compchoice === "paper") {
                console.log("You lose");
                changePara.innerText = "you lose"
                compP.innerText = parseInt(compP.innerText) + 1 ;
                
                boxcolor.style.background = "red";
                boxcolor.style.color = "black";
                win = false;
            } else {
                userP.innerText = parseInt(userP.innerText) + 1 ;
                console.log("You won");
                changePara.innerText = "you won"
                boxcolor.style.background = "green";
                boxcolor.style.color = "black";
                win = true;
            }
        } else if (userchoice === "scissor") {
            if (compchoice === "rock") {
                compP.innerText = parseInt(compP.innerText) + 1 ;
                console.log("You lose");
                changePara.innerText = "you lose"
                
                boxcolor.style.background = "red";
                boxcolor.style.color = "black";
                win = false;
            } else {
                userP.innerText = parseInt(userP.innerText) + 1 ;
            
                console.log("You won");
                win = true;
                changePara.innerText = "you won"
                boxcolor.style.background = "green";
                boxcolor.style.color = "black";
            }
        }
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userchoice = btn.getAttribute("id");
        const compchoice = randomno();
        playgame(userchoice, compchoice);
    });
});
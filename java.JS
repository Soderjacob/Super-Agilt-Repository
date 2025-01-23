

const newGameButton = document.getElementById('new-game-button');
const exitButton = document.getElementById('exit-button');
const word1 = document.getElementById('Word1');
const word2 = document.getElementById('Word2');
const confirmButton = document.getElementById('confirm-button');
//const input = document.getElementById('input');

//input

function displayValue(){
    const inputValue = document.getElementById("input").value;
    document.getElementById("output").innerText=inputValue;
}

//check if buttons work

newGameButton.addEventListener('click',function(){
    alert('You want to start a new game!');
});
exitButton.addEventListener('click',function(){
    alert('You want to exit game!');
});

word1.addEventListener('click',function(){
    alert('you chose word1');
});
word2.addEventListener('click',function(){
    alert('you chose word2');
});

//
const myButton = document.getElementById("myButton")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
const myButton = document.getElementById("myButton");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");





myButton.addEventListener("click", event =>{
    while(true){
    if(p1.style.display === "none"){
      p1.style.display = "block";
      p2.style.display = "none";
     
    }
    else {
       p1.style.display = "none";
        p2.style.display = "block";
    }
    break;
}

})

let winCount = 0;
let count = 0;

let chosenWord = "";





//initial function (called when page loads or user press new game)
const initializer = () => {
    winCount = 0;
    count = 0;

    //Initially erase all content and hide letters and new game button
    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";

    //For creating letter buttons
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        //Number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i);
        //character button click
        button.addEventListener("click", () => {
          let charArray = chosenWord.split("");
          let dashes = document.getElementsByClassName("dashes");
          //if array contains clciked value replace the matched dash with letter else dram on canvas
          if (charArray.includes(button.innerText)) {
            charArray.forEach((char, index) => {
              //if character in array is same as clicked button
              if (char === button.innerText) {
                //replace dash with letter
                dashes[index].innerText = char;
                //increment counter
                winCount += 1;
                //if winCount equals word lenfth
                if (winCount == charArray.length) {
                  resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                  //block all buttons
                  blocker();
                }
              }
            });
          } else {
            //lose count
            count += 1;
            //for drawing man
            drawMan(count);
            //Count==6 because head,body,left arm, right arm,left leg,right leg
            if (count == 6) {
              resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              blocker();
            }
          }
          //disable clicked button
          button.disabled = true;
        });
        letterContainer.append(button);
      }
    



//Canvas This code will be under the buttons...
displayOptions();
//Call to canvasCreator (clear previous and creating initial)
let { initialDrawing } = canvasCreator();
//initialDrawing will draw the frame
initialDrawing();
};

const canvasCreator =() => {
    let context = canvas.getContent("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    //For drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX,toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 110);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };

//initial frame
const initialDrawing = () => {
//clear canvas
context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//bottom line
drawLine(10, 130, 130, 130);
//left line
drawLine(10, 10, 10, 131);
//top line
drawLine(10, 10, 70, 10);
//small top line
drawLine(70, 10, 70, 20);
};

return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;    
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
};
newGameButton.addEventListener("click",initializer);
window.onload = initializer;
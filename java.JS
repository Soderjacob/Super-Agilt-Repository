const canvas = document.getElementById("canvas")

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

myButton.addEventListener("click", event =>{
    if(p1.style.display === "none"){
      p1.style.display = "block";
    }
    else{
       p2.style.display = "none";
    }
})


//Canvas This code will be under the buttons...
displayOptions();
//Call to canvasCreator (clear previous and creating initial)
let { initialDrawing } = canvasCreator();
//initialDrawing will draw the frame
initialDrawing();
// }; Remove comment and keep end curlybraces when buttons are responsive

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
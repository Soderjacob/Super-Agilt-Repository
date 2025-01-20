const canvas = document.getElementById("canvas")







//Canvas This code will be under the buttons...
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
}
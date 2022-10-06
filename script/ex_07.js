let canvas = document.getElementsByTagName("canvas")[0];
let buttons = document.getElementsByTagName("button");

let med = canvas.getContext("2d");

med.beginPath();
med.moveTo(6, 6);
med.lineTo(14, 10);
med.lineTo(6, 14);
med.closePath();
med.borderWidth = 1;
med.strokeStyle = 'white';
med.stroke();
med.fillStyle = 'white';
med.fill();

let media = new Audio()
media.src = "triangle.ogg"
canvas.onclick = function(){
    console.log("button: play (canvas)")
    media.play()
    med.strokeStyle = 'orange'
    med.stroke()
    med.strokeStyle = 'orange'
    med.fill()
}
buttons[0].onclick = function(){
    console.log("button: pause")
    media.pause()
    med.strokeStyle = 'white'
    med.stroke()
    med.fillStyle = 'white'
    med.fill()
}
buttons[1].onclick = function(){
    console.log("button: stop")
    media.pause()
    media.currentTime = 0
    med.strokeStyle = 'white'
    med.stroke()
    med.fillStyle = 'white'
    med.fill()
}
buttons[2].onclick = function(){
    console.log("button: mute")
    if (media.muted == true)
        media.muted = false
    else 
        media.muted = true
}

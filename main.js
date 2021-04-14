function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,350);
    video.hide();
}
function draw(){
    image(video, 0, 0, 400, 350);
}
function start(){
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded(){
    console.log("ModelLoaded!");
    status=true;
}
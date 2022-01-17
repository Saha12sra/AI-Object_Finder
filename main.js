img = "";
status = "";

function setup() {

    canvas = createCanvas(420, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(420, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw() {

    image(video, 0, 0, 420, 380);

}

function start() {

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {

    console.log("model loaded");
    status = true;
    

}
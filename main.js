objects = [];
img = "";
status = "";
input = document.getElementById("input").innerHTML;
speak_data = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function setup() {

    canvas = createCanvas(420, 345);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(420, 345);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw() {

    image(video, 0, 0, 420, 345);

    if (objects.length = input) {
        objectDetector.detect(gotResult);
        var synth = window.speechSynthesis;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        speak_data = "";
    }
    else{
document.getElementById("status").innerHTML="Object mentioned not found.";
status="";
    }
    for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status: Detecting Objects";
        document.getElementById("number_of_objects").innerHTML = "Number of Objects: " + objects.length;

        fill("#029ea6");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%" + objects[i].x + 15, objects[i].y + 15);
        noFill("#029ea6");
        stroke("#029ea6");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

    }

}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function start() {

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {

    console.log("model loaded");
    status = true;


}


status = "";
plants_img = "";
function preload(){
    img = loadImage("plants_project.jpeg");
}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.position(330, 200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(img, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("model is ready");
    Status = true;
    object_Detector.detect(plants_img,gotResults);
}


function gotResults(error, result){
    if(error){
       console.log(error);
    }

    else{
        console.log(result);
    }
}

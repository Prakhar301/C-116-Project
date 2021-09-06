function preload(){
    clown_nose="https://i.postimg.cc/Sxz3MfJ2/clown-nose.jpg";
}
function setup(){
canvas=createCanvas(450,450);
canvas.position(500,125);
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
if(results.length>0){
console.log(results);
var nosex=results[0].pose.nose.x;
var nosey=results[0].pose.nose.y;
console.log(nosex);
console.log(nosey);
}
}
function modelLoaded(){
console.log("PoseNet Loaded");
}
function take_snapshot(){
save('snapshot.png');
}
function draw(){
image(video,25,25,400,400);
image(clown_nose,nosex,nosey,50,50)
}
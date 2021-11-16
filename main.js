leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    
    canvas= createCanvas(550,500);
    canvas.position(560,100);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    function draw(){
        background('#96c1d4');
        document.getElementById("font_size").innerHTML="size of the text will be:"+difference+"px";
        textSize(difference);
        fill("#011242");
        text('Hello',50,350);
    }
    function modelLoaded(){
        console.log('PoseNet is initialized');
        
    }
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
        }
    }
difference=0;
leftWristx=0;
rightWristx=0;


function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(500,400);
  canvas.position(560,100);
  

 posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses)

}


function modelLoaded()
{
    console.log("Model is initialized");

}

function gotPoses(results)
{
    if (results.length>0) 
    {
      console.log(results);  

      leftWristx=results[0].pose.leftWrist.x;
      rightWristx=results[0].pose.rightWrist.x;

      difference=floor(leftWristx - rightWristx);

      
    }
}



function draw()
{
    background('#969A97');
    fill("blue")
    stroke("pink")

    textSize(difference);
    document.getElementById("text_size").innerHTML="Font Size of The text Will Be="+ difference+"px";
    text("Somesh",50,350);
}



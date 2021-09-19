var camera;
var distance;
var length;
var confLocs = [];
var confTheta = [];

function setup() 
{
    createCanvas(900, 800, WEBGL);
    
    for (i=0; i<200; i++){
        confLocs.push(createVector(random(-500,500),random(-800,0),random(-500,500)));
        confTheta.push(random(0,360));

    }


}

function draw() 
{
    background(125);
    angleMode(DEGREES);
    boxes();
    cameracircle();
    confetti();
}

function cameracircle()
{

    camera = createCamera();
    camera.setPosition(sin(frameCount)*800,-600,cos(frameCount)*800);
    camera.lookAt(0,0,0);

}

function boxes()
{
    normalMaterial();
    stroke(0);
    strokeWeight(2);
    for (var i=0;i<20;i++){

        for (var j=0;j<20; j++){
            
            push();
            distance = dist(50*i-400,0,50*j-400,0,0,0);
            length = map(sin(distance+frameCount),-1,1,100,300);
            translate(50*i-400, 0, 50*j-400);
            box(50,length,50);
            pop();

        }
    }
}

function confetti()
{

    for (i =0; i <confLocs.length; i++)
    {
        push();
            translate(confLocs[i].x,confLocs[i].y,confLocs[i].z);
            rotateX(confTheta[i]);
            rotateY(confTheta[i]);
            rotateZ(confTheta[i]);
            noStroke();
            plane(15,15);
            confLocs[i].y+=1;
            confTheta[i]+=10;
        pop();
        if (confLocs[i].y>0)
        {
            confLocs[i].y = -800;

        }
    }
    

}
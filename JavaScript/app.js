// create variables to reference and store canvas
let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2D');
let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;

// create the padle
let paddleheight = 12;
let paddlewidth = 72;

// specify starting point of paddle
let paddleX = (canvas.width-paddlewidth)/2;

// holding variables for right and left arrows on keyboard
let rightPressed = false;
let leftPressed = false;

// holding variables for bricks
let brickRowCount = 4;
let brickColumnCount = 7;
let brickWidth = 72;
let brickHeight = 24;
let brickPadding = 12;
let brickOffsetTop = 32;
let brickOffsetLeft = 32;

// create variables to take score
let score = 0;

// creating arrays for the bricks
let bricks = [];
for (c=0;c<brickColumnCount;c++){
    bricks[c] = [];
    for (r=0;r<brickRowCount;r++){
        // set the x and y position of bricks
        bricks[c][r] = { x:0, y:0, status:1};
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

// Anchor paddle movement to mouse movement

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddlewidth/2;
    }
}

function keyDownHandler(e) {
    if (e.keyCode === 39){
        rightPressed = true;
    } else if ( e.keyCode === 37){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if (e.keyCode === 39){
        rightPressed = false;
    } else if (e.keyCode === 37){
        leftPressed = false;
    }
}

function drawBall(){
    ctx.beginPath()
    ctx.arc(x,y,ballRadius, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}


// create a function to create the paddle
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleheight, paddlewidth, paddleheight);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// create a function to draw bricks
function drawBricks(){
    for (c=0;c<brickColumnCount;c++){
        for (r=0;r<brickRowCount;r++){
            if (bricks[c][r].status === 1){
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = '#6600cc';
                ctx.fill();
                ctx,closePath();

            }
        }
    }
}

// create a function to keep track of score
function drawScore(){
    ctx.font = '18px Arial';
    ctx.fillStyle = 'brown';
    ctx.fillText('Score: ' + score, 8, 20);
}

// Collision detection for bricks
function collisionDetection(){
    for (c=0;c<brickColumnCount;c++){
        for(r=0;r<brickRowCount;r++){
            let b = bricks[c][r];
            if (b.status === 1){
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score === brickColumnCount*brickRowCount){
                        alert('Congratulations you have won!');
                        document.location.reload();
                    }
                }
            }
        }
    }
}


function draw(){
    // clear each instance of the canvas so a new circle can be drawn
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawScore();
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

}

setInterval(draw, 10);
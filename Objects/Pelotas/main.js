// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); //crea un objeto 'ctx' que representa directamente el area sobre la que dibujaremos en nuestro canvas

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
// iguala el size de nuestro canvas al size del viewport del navegador


// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

// agregando el metodo 'draw' al prototipo de la funcion 'ball', ahora es una funcion que queda adjuntada a 'ball'

Ball.prototype.draw = function() {
    ctx.beginPath(); // para iniciar a dibujar una figura en nuestro canvas 'ctx'
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill(); // para terminar de de dibujar la figura que iniciamos a dibujar con beginPath()
}

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y - this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
        }
    }
}

let balls = []; // creando el array 'balls' inicalmente vacio, para luego ir agregando pelotas

while (balls.length < 25) {
    let size = random(10,20);
    let ball = new Ball(
        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size
    );

    balls.push(ball); // agrega una pelota al array 'balls', hasta que hayan 25 pelotas
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();
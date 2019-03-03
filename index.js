//const Stuff = require('projectile.js');

let g = 100;

const ball = new Projectile(document.getElementById('element'),100,100);

document.getElementById('increase-size').addEventListener('click', () => {
  ball.e.style.width = ball.e.clientWidth * 1.2 + 'px';
  ball.e.style.height = ball.e.clientHeight * 1.2 + 'px';
  console.log('Now size of ball is '+ball.e.clientWidth+'x'+ball.e.clientHeight);
});

document.getElementById('decrease-size').addEventListener('click', () => {
  ball.e.style.width = ball.e.clientWidth / 1.2 + 'px';
  ball.e.style.height = ball.e.clientHeight / 1.2 + 'px';
  console.log('Now size of ball is '+ball.e.clientWidth+'x'+ball.e.clientHeight);
});

document.getElementById('set-position').addEventListener('click', () => {
  ball.setXY(0, 100);
  console.log(ball.position);
});

document.getElementById('default-gravity-throw').addEventListener('click', () => {
  ball.throwXY(100, -100);
  console.log('default gravity throw');
});

document.getElementById('gravity-less-throw').addEventListener('click', () => {
  ball.throwXY(100, 100, 0);
  console.log('gravity less throw');
});

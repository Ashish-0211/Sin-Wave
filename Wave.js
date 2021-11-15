const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

c.beginPath();

c.moveTo(0, canvas.height / 2);

for (let i = 0; i < canvas.width; i++) {
  c.lineTo(i, canvas.height / 2 + Math.sin(i * 0.03) * 100);
}
c.stroke();

// const canvas = document.querySelector("#sin-wave");
// const c = canvas.getContext("2d");

// document.getElementById("btn").addEventListener("click", sin_wave);
// function sin_wave() {
//   var amplitude = document.getElementById("amplitude");
//   var frequency = document.getElementById("frequency");
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
//   c.moveTo(0, canvas.height / 2);
//   for (let i = 0; i < canvas.width; i++) {
//     c.lineTo(i, canvas.height / 2 + Math.sin(i * amplitude) * frequency);
//   }
//   c.stroke();
// }

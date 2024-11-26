const canvas = document.getElementById('background-animation');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store particles
let particles = [];

// Particle class
class Particle {
   constructor(x, y, size, speedX, speedY, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;
   }

   draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
   }

   update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Bounce particles off the edges
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
   }
}

// Initialize particles
function initParticles() {
   for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2;
      const color = `rgba(0, 255, 255, ${Math.random()})`;

      particles.push(new Particle(x, y, size, speedX, speedY, color));
   }
}

// Animate particles
function animateParticles() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   particles.forEach((particle) => {
      particle.update();
      particle.draw();
   });

   requestAnimationFrame(animateParticles);
}

// Initialize and animate
initParticles();
animateParticles();

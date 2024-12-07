document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.style.background = 'radial-gradient(circle, #e67e22, #1c1c1e)';
    body.style.animation = 'bg-animation 5s infinite alternate';
  
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes bg-animation {
        0% {
          background: radial-gradient(circle, #e67e22, #1c1c1e);
        }
        100% {
          background: radial-gradient(circle, #1c1c1e, #e67e22);
        }
      }
    `;
    document.head.appendChild(style);
  });
  
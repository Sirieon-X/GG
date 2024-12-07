function exploreMore() {
    window.location.href = "users.html";
}

const networkContainer = document.querySelector('.network-animation');

// Number of nodes in the network
const nodeCount = 50;

// Function to generate random positions
const getRandomPosition = () => ({
   x: Math.random() * 800 - 400,
   y: Math.random() * 800 - 400,
   z: Math.random() * 800 - 400,
});

// Function to create a node
const createNode = () => {
   const node = document.createElement('div');
   node.classList.add('node');
   const { x, y, z } = getRandomPosition();
   node.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
   networkContainer.appendChild(node);
   return { x, y, z, element: node };
};

// Function to create a connection between two nodes
const createConnection = (node1, node2) => {
    const connection = document.createElement('div');
    connection.classList.add('connection');
 
    // Calculate distance and angle
    const dx = node2.x - node1.x;
    const dy = node2.y - node1.y;
    const dz = node2.z - node1.z;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
 
    connection.style.width = `${distance}px`;
    connection.style.transform = `
       translate3d(${node1.x}px, ${node1.y}px, ${node1.z}px)
       rotateY(${Math.atan2(dz, dx)}rad)
       rotateZ(${Math.asin(dy / distance)}rad)
    `;
 
    networkContainer.appendChild(connection);
 };

// Create nodes and connections
const nodes = [];
for (let i = 0; i < nodeCount; i++) {
   nodes.push(createNode());
}

nodes.forEach((node1, i) => {
   for (let j = i + 1; j < nodes.length; j++) {
      if (Math.random() > 0.85) {
         createConnection(node1, nodes[j]);
      }
   }
});


document.getElementById("network-btn").addEventListener("mouseover", () => {
    console.log("Node connection animation triggered!");
});

// JavaScript for Menu Animation
document.addEventListener("DOMContentLoaded", () => {
   const menuButton = document.getElementById("menuButton");
   const menu = document.getElementById("menu");
 
   menuButton.addEventListener("click", () => {
     menu.classList.toggle("show");
   });
 });
 
const targetUsers = 10000
const speed = 50

function animateUserCount() {
    const counter = document document.getElementById("userCount");
    let count = 0;

    const increment = targetUsers / speed;

    const updateCount = () => {
        count += increment;
        if (count < targetUsers) {
            counter.innerText = Math,floor(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.innerText = targetUsers.toLocaleString()
        } 
    };


    updateCount();
}


window.onload = animateUserCount;
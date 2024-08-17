// script.js
const pencil = document.getElementById('pencil');
let clickCount = 0;

pencil.addEventListener('mousedown', () => {
    clickCount += 1;

    if (clickCount === 1) {
        // Normal movement logic, can be right
        pencil.style.transform = 'translateX(100px)';
    } else if (clickCount === 2) {
        // Add circular motion class
        pencil.classList.add('circular-motion');
        clickCount = 0; // Reset click count
    }
});

pencil.addEventListener('mouseup', () => {
    if (!pencil.classList.contains('circular-motion')) {
        pencil.style.transform = 'translateX(0)';
    }
});

pencil.addEventListener('mouseleave', () => {
    if (!pencil.classList.contains('circular-motion')) {
        pencil.style.transform = 'translateX(0)';
    }
});

// Remove circular motion on double-click stop
pencil.addEventListener('dblclick', () => {
    pencil.classList.remove('circular-motion');
    pencil.style.transform = 'translateX(0)';
});

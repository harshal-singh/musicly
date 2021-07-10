'use strict';

const loader = document.getElementById('loader');

// loader
function hideLoader() {
    loader.style.opacity = 0;
    setTimeout(() => {
        loader.style.display = 'none';
    }, 800);
};
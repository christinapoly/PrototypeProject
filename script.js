const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.querySelector('.scroll-content');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 100; // Adjust the scroll amount as needed
});

scrollRight.addEventListener('click', () => {
    scrollContainer.scrollLeft += 100; // Adjust the scroll amount as needed
});
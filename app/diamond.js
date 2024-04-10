document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('mouseover', () => {
            const hoverText = document.querySelector('#hover-text');
            hoverText.textContent = img.alt;
            hoverText.style.visibility = 'visible'; /* Make it visible */
            hoverText.style.opacity = '1'; /* Fade in */
        });
        img.addEventListener('mouseout', () => {
            const hoverText = document.querySelector('#hover-text');
            hoverText.style.visibility = 'hidden'; /* Make it invisible */
            hoverText.style.opacity = '0'; /* Fade out */
        });
    });
});

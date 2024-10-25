// Tooltip for hovering over tool cards
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('highlight');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('highlight');
    });
});

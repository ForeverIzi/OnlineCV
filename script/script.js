/* CARD TOGLE FUNCTION */ 

function toggleCourse(element) {
    const courseItem = element.closest('.course-item');
    courseItem.classList.toggle('active');

    document.querySelectorAll('.course-item').forEach(item => {
        if (item !== courseItem && item.classList.contains('active')) {
            item.classList.remove('active')
        }
    });
};

/* CARROUSEL STACK FUNCTION */

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.tech-stack-track');
    const items = document.querySelectorAll('.tech-item');
    
    const cloneItems = Array.from(items).map(item => item.cloneNode(true));
    cloneItems.forEach(item => track.appendChild(item));
    
    const itemCount = items.length;
    track.style.animationDuration = `${itemCount * 3}s`;
    
    track.addEventListener('animationiteration', () => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        requestAnimationFrame(() => {
            track.style.transition = 'transform 0s linear';
        });
    });
});
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


/* NAV BAR */ 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
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

    const experienceSection = document.getElementById('mid-section');
    const experienceStart = experienceSection.offsetTop;
    const experienceEnd = experienceStart + experienceSection.offsetHeight;
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + 150;
            
 
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                current = section.getAttribute('id');
            }
            
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

/* MOBILE MENU */

const menuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    
    const icon = this.querySelector('i');
    if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});

/* TRANSLATION */ 

let currentLang = 'pt'; 

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyTranslations();
    localStorage.setItem('resumeLanguage', currentLang);
}

function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLang][key];
    });
  
    document.querySelector('.lang-toggle i').className = 
    currentLang === 'pt' ? 'fas fa-language' : 'fas fa-language';
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('resumeLanguage');
    if (savedLang) currentLang = savedLang;
  
    document.querySelector('.lang-toggle').addEventListener('click', toggleLanguage);
    applyTranslations();
});

/* LIGHT THEME */ 

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('.theme-toggle i');
    
    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
}

function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.querySelector('.theme-toggle i').classList.remove('fa-moon');
        document.querySelector('.theme-toggle i').classList.add('fa-sun');
    }
}

document.addEventListener('DOMContentLoaded', checkTheme);
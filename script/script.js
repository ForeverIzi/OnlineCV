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
const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-section');

        sections.forEach(section => {
            if (section.id === target) {
                section.classList.remove('hidden');
                section.style.opacity = 0;
                section.style.transform = 'translateY(50px)';
                setTimeout(() => {
                    section.style.opacity = 1;
                    section.style.transform = 'translateY(0)';
                }, 10);
            } else {
                section.classList.add('hidden');
            }
        });
    });
});

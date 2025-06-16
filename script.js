document.addEventListener('DOMContentLoaded', function() {

    // --- THEME TOGGLE FUNCTIONALITY ---
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const body = document.body;

    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    applySavedTheme();

    // --- VIEW TOGGLE FUNCTIONALITY ---
    const viewToggle = document.getElementById('view-toggle-checkbox');
    
    const applySavedView = () => {
        const savedView = localStorage.getItem('view');
        // Default to recruiter view unless 'technical' is explicitly saved
        if (savedView === 'technical') {
            body.classList.remove('recruiter-mode-active');
            viewToggle.checked = false;
        } else {
            body.classList.add('recruiter-mode-active');
            viewToggle.checked = true;
        }
    };

    viewToggle.addEventListener('change', () => {
        if (viewToggle.checked) {
            body.classList.add('recruiter-mode-active');
            localStorage.setItem('view', 'recruiter');
        } else {
            body.classList.remove('recruiter-mode-active');
            localStorage.setItem('view', 'technical');
        }
    });
    
    applySavedView();


    // --- SCROLL REVEAL ANIMATION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    

    // --- MOBILE NAVIGATION (HAMBURGER MENU) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenuContainer = document.querySelector('.nav-menu-container');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', () => {
        navMenuContainer.classList.toggle('active');
        if (navMenuContainer.classList.contains('active')) {
             hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenuContainer.classList.contains('active')) {
                navMenuContainer.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

});

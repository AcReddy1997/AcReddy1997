document.addEventListener('DOMContentLoaded', function() {

    // --- THEME TOGGLE FUNCTIONALITY ---
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const body = document.body;

    // Function to apply the saved theme on load
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

    // Event listener for the theme toggle switch
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Apply theme on initial load
    applySavedTheme();


    // --- SCROLL REVEAL ANIMATION ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            // Optional: To make animation repeat every time it scrolls into view
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    

    // // --- VISITOR COUNTER FUNCTIONALITY ---
    // const counter = document.querySelector(".counter-number");
    // async function updateCounter() {
    //     try {
    //         let response = await fetch("https://nnrqifw6sbzmtw74noap5uoexu0njlkj.lambda-url.us-east-1.on.aws/");
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         let data = await response.json();
    //         counter.innerHTML = `${data.views}`;
    //     } catch (error) {
    //         console.error("Failed to fetch visitor count:", error);
    //         counter.innerHTML = "N/A";
    //     }
    // }

    // updateCounter();


    // --- MOBILE NAVIGATION (HAMBURGER MENU) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenuContainer = document.querySelector('.nav-menu-container');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', () => {
        navMenuContainer.classList.toggle('active');
        // Simple toggle between bars and times icon
        if (navMenuContainer.classList.contains('active')) {
             hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenuContainer.classList.contains('active')) {
                navMenuContainer.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

});

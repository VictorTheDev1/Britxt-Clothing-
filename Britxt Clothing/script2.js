    // Select the toggle button and menu
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Add click event to toggle menu visibility
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });

// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-softnix-slate/10');
            navbar.classList.remove('bg-transparent', 'py-5');
            navbar.classList.add('py-3');
            
            // Text color change for desktop links
            const desktopLinks = document.querySelectorAll('.desktop-link');
            desktopLinks.forEach(link => {
                link.classList.remove('text-softnix-navy');
                link.classList.add('text-softnix-charcoal');
            });
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-softnix-slate/10');
            navbar.classList.add('bg-transparent', 'py-5');
            navbar.classList.remove('py-3');

            // Text color reset
            const desktopLinks = document.querySelectorAll('.desktop-link');
            desktopLinks.forEach(link => {
               link.classList.add('text-softnix-navy');
               link.classList.remove('text-softnix-charcoal'); 
            });
        }
    });
});

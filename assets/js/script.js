// Initialize Lucide Icons
lucide.createIcons();


// Gestion du menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');

    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        // Changer l'icône en croix (optionnel)
        mobileMenuButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;
    } else {
        mobileMenu.classList.add('hidden');
        // Revenir à l'icône hamburger
        mobileMenuButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            `;
    }
});
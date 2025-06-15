// Initialize Lucide Icons
lucide.createIcons();


// Gestion des filtres
const parcoursFilter = document.getElementById('parcours-filter');
const filiereFilter = document.getElementById('filiere-filter');
const genreFilter = document.getElementById('genre-filter');
const paysFilter = document.getElementById('pays-filter');
const promoButtons = document.querySelectorAll('[data-promo]');

function filterContent() {
    const parcoursValue = parcoursFilter.value;
    const filiereValue = filiereFilter.value;
    const genreValue = genreFilter.value;
    const paysValue = paysFilter.value;
    const promoValue = document.querySelector('[data-promo].active')?.getAttribute('data-promo') || 'all';

    // Filtrer les cartes étudiantes
    document.querySelectorAll('.student-card').forEach(card => {
        const cardWrapper = card.closest('[data-promo]');
        const promoMatch = promoValue === 'all' || cardWrapper.getAttribute('data-promo') === promoValue;
        const parcoursMatch = parcoursValue === 'all' || cardWrapper.getAttribute('data-parcours') === parcoursValue;
        const filiereMatch = filiereValue === 'all' || cardWrapper.getAttribute('data-filiere') === filiereValue;
        const genreMatch = genreValue === 'all' || cardWrapper.getAttribute('data-genre') === genreValue;
        const paysMatch = paysValue === 'all' || cardWrapper.getAttribute('data-pays') === paysValue;

        if (promoMatch && parcoursMatch && filiereMatch && genreMatch && paysMatch) {
            cardWrapper.style.display = 'block';
        } else {
            cardWrapper.style.display = 'none';
        }
    });

    // Filtrer les tableaux (si visibles)
    if (document.getElementById('tables-content').style.display !== 'none') {
        document.querySelectorAll('tr[data-promo]').forEach(row => {
            const promoMatch = promoValue === 'all' || row.getAttribute('data-promo') === promoValue;
            if (promoMatch) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
}

// Écouteurs d'événements pour les filtres
parcoursFilter.addEventListener('change', filterContent);
filiereFilter.addEventListener('change', filterContent);
genreFilter.addEventListener('change', filterContent);
paysFilter.addEventListener('change', filterContent);

promoButtons.forEach(button => {
    button.addEventListener('click', () => {
        promoButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterContent();
    });
});

// Gestion des onglets
const tabButtons = document.querySelectorAll('[data-tab]');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        const tabId = button.getAttribute('data-tab');
        document.getElementById(`${tabId}-content`).classList.add('active');
    });
});

// Toggle des tableaux
const toggleTablesBtn = document.getElementById('toggle-tables');
const tablesContent = document.getElementById('tables-content');

toggleTablesBtn.addEventListener('click', () => {
    if (tablesContent.style.display === 'none' || !tablesContent.style.display) {
        tablesContent.style.display = 'block';
        toggleTablesBtn.innerHTML = `
                        <i data-lucide="table" class="w-5 h-5 mr-2"></i>
                        Masquer les tableaux
                    `;
    } else {
        tablesContent.style.display = 'none';
        toggleTablesBtn.innerHTML = `
                        <i data-lucide="table" class="w-5 h-5 mr-2"></i>
                        Afficher les tableaux
                    `;
    }
    lucide.createIcons(); // Recharger les icônes après le changement
});

// Pagination
const paginationBtns = document.querySelectorAll('.pagination-btn');
paginationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        paginationBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Ici vous pourriez ajouter la logique pour changer de page
    });
});


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
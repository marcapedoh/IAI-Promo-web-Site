// Initialize Lucide Icons
lucide.createIcons();

// Initialize AOS Animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 1);
    } else {
        counter.innerText = target;
    }

    function updateCounter() {
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }
});

// Typed.js Initialization
const typed = new Typed('#typed-text', {
    strings: [
        "Formation d'excellence en informatique...",
        "Réseau de 12 pays africains...",
        "85% de nos diplômés trouvent un emploi dans les 6 mois...",
        "Plus de 1250 étudiants formés chaque année..."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true
});

// Partner Info Functions
function showPartnerInfo(partner) {
    const partnerInfo = document.getElementById('partner-info');
    const partnerName = document.getElementById('partner-name');
    const partnerContent = document.getElementById('partner-content');

    partnerInfo.classList.remove('hidden');

    if (partner === 'montbeliard') {
        partnerName.textContent = "Université de Montbéliard";
        partnerContent.innerHTML = `
                    <p class="mb-4">L'IAI a établi un partenariat stratégique avec l'Université de Montbéliard en France pour des échanges académiques et des doubles diplômes.</p>
                    <h4 class="font-semibold text-gray-800 mb-2">Options disponibles:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Échange d'un semestre pour les étudiants en Master</li>
                        <li>Double diplôme en Informatique Appliquée</li>
                        <li>Programme de recherche conjoint en IA</li>
                    </ul>
                    <h4 class="font-semibold text-gray-800 mb-2">Conditions d'admission:</h4>
                    <ul class="list-disc list-inside">
                        <li>Niveau B2 en français obligatoire</li>
                        <li>Moyenne générale supérieure à 14/20</li>
                        <li>Lettre de motivation et entretien</li>
                    </ul>
                `;
    } else if (partner === 'nice') {
        partnerName.textContent = "Polytechnique Nice Sophia";
        partnerContent.innerHTML = `
                    <p class="mb-4">Notre partenariat avec Polytechnique Nice Sophia permet aux meilleurs étudiants ingénieurs de compléter leur formation en France.</p>
                    <h4 class="font-semibold text-gray-800 mb-2">Options disponibles:</h4>
                    <ul class="list-disc list-inside mb-4">
                        <li>Année de spécialisation en Cybersécurité</li>
                        <li>Stage de fin d'études en entreprise française</li>
                        <li>Bourses d'excellence pour 3 étudiants par an</li>
                    </ul>
                    <h4 class="font-semibold text-gray-800 mb-2">Conditions d'admission:</h4>
                    <ul class="list-disc list-inside">
                        <li>Être en dernière année du cycle ingénieur</li>
                        <li>Moyenne générale supérieure à 15/20</li>
                        <li>Projet professionnel clair</li>
                    </ul>
                `;
    } else {
        partnerName.textContent = "Partenariat International";
        partnerContent.innerHTML = `
                    <p class="mb-4">L'IAI développe constamment de nouveaux partenariats avec des universités étrangères pour offrir plus d'opportunités à ses étudiants.</p>
                    <p>Les modalités de ces partenariats varient selon les accords spécifiques avec chaque institution. Contactez le service des relations internationales pour plus d'informations.</p>
                `;
    }

    // Scroll to partner info
    partnerInfo.scrollIntoView({ behavior: 'smooth' });
}

function hidePartnerInfo() {
    document.getElementById('partner-info').classList.add('hidden');
}
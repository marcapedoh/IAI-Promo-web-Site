// Initialize Lucide Icons
lucide.createIcons();

// Initialize AOS Animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Gender Chart
const genderCtx = document.getElementById('genderChart').getContext('2d');
const genderChart = new Chart(genderCtx, {
    type: 'doughnut',
    data: {
        labels: ['Hommes', 'Femmes'],
        datasets: [{
            data: [65, 35],
            backgroundColor: [
                '#fbbf24',
                '#fcd34d'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Course Chart
const courseCtx = document.getElementById('courseChart').getContext('2d');
const courseChart = new Chart(courseCtx, {
    type: 'bar',
    data: {
        labels: ['AP', 'MIAGE', 'Master', 'Ingénieur'],
        datasets: [
            {
                label: 'Hommes',
                data: [70, 60, 55, 75],
                backgroundColor: '#fbbf24'
            },
            {
                label: 'Femmes',
                data: [30, 40, 45, 25],
                backgroundColor: '#fcd34d'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: false,
            },
            y: {
                stacked: false,
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
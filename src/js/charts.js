// Remove this line:
// import Chart from 'chart.js/auto';

// Instead, rely on Chart.js being loaded globally
const ctx = document.getElementById('myChart').getContext('2d');

export function renderChart(workouts) {
    const dates = workouts.map(workout => workout.date);
    const durations = workouts.map(workout => workout.duration);

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Workout Duration (minutes)',
                data: durations,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

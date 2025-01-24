const labelsInput = document.getElementById('labels');
const dataInput = document.getElementById('data');
const generateBtn = document.getElementById('generate-btn');
const chartCanvas = document.getElementById('chart');

let chart;

generateBtn.addEventListener('click', function () {
    const labels = labelsInput.value.split(',').map(label => label.trim());
    const data = dataInput.value.split(',').map(value => parseFloat(value.trim()));

    if (labels.length === data.length && labels.length > 0) {
        if (chart) {
            chart.destroy(); // Destroy existing chart if it exists
        }

        chart = new Chart(chartCanvas, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                    ],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Pie Chart'
                    }
                }
            }
        });
    } else {
        alert('Please enter valid labels and values with the same number of items.');
    }
});

new Chart(document.getElementById("bar-chart-top-left"), {
    type: 'bar',
    data: {
        labels: ["≤300", "300-1000", "1000-3000", "≥3000"],
        datasets: [{
            label: "Tổng số dự án",
            backgroundColor: ["#1e9cef", "#1e9cef", "#1e9cef", "#1e9cef"],
            data: [2478, 5267, 734, 784],

        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom'
        },
    }
});
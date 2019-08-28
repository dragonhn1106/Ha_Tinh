new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: ["Đài loan", "Đức", "Hoa kỳ", "Singapore", "Úc"],
        datasets: [{
            label: "Tổng vốn đầu tư",
            backgroundColor: ["#f95808", "#f95808", "#f95808", "#f95808", "#f95808"],
            data: [120, 60, 45, 160, 20]
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom'
        },
        title: {
            // display: true,
            // text: 'Predicted world population (millions) in 2050'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                barPercentage: 0.7,
                ticks: {
                    max: 200,
                    min: 0,
                    stepSize: 50,
                    fontColor: "#1f4e79",
                },

            }],
        }
    }
});
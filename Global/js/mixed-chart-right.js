new Chart(document.getElementById("mixed-chart-right"), {
    type: 'bar',
    data: {
        labels: ["2015", "2016", "2017", "2018", "2019"],
        datasets: [{
            label: "Tổng vốn đầu tư",
            type: "line",
            borderColor: "#f95808",
            backgroundColor: "red",
            data: [60, 70, 40, 55, 45],
            fill: false
        }, {
            label: "Tổng vốn thực hiện",
            type: "line",
            borderColor: "#fbc523",
            backgroundColor: "#fbc523",
            fill: false,
            data: [119, 120, 110, 115, 125]
        }, {
            label: "Tổng số dự án",
            type: "bar",
            backgroundColor: "#1e9cef",
            backgroundColorHover: "#1e9cef",
            data: [120, 110, 110, 115, 125],
            padding: 10

        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                barPercentage: 0.4,

            }],
            yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
                gridLines: {
                    display: false
                },
                ticks: {
                    max: 200,
                    min: 0,
                    stepSize: 50,
                    
                },
            }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                    max: 90000,
                    min: 0,
                    stepSize: 30000
                },

            }],

        }
    }
});
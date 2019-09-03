Chart.defaults.global.legend.labels.usePointStyle = true;
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
            fill: false,
            borderWidth: 1
        }, {
            label: "Tổng vốn thực hiện",
            type: "line",
            borderColor: "#fbc523",
            backgroundColor: "#fbc523",
            fill: false,
            data: [119, 120, 110, 115, 125],
            borderWidth: 1
        }, {
            label: "Tổng số dự án",
            type: "bar",
            backgroundColor: "#1e9cef",
            backgroundColorHover: "#1e9cef",
            data: [10, 110, 110, 115, 125],
            padding: 10,
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
            borderWidth: 1,
            labels: {
                fontColor: '#2c5880',
                fontStyle: "bold",
                // fontSize: 9,
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                barPercentage: 0.7,
                ticks: {
                    // stepSize: 0.5,
                    // max: Math.max.apply(null, [ < %= arrValue % > ]) + 1,
                    display: true,
                    fontSize: 11,
                    padding: 12,
                    fontColor: "#1f4e79",
                },

            }],
            yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
                gridLines: {
                    display: false
                },
                ticks: {
                    max: 150,
                    min: 0,
                    stepSize: 20,
                    display: true,
                    fontSize: 11,
                    padding: 12,
                    fontColor: "#1f4e79",


                },
            }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                    max: 90000,
                    min: 0,
                    stepSize: 30000,
                    fontSize: 11,
                    padding: 12,
                    fontColor: "#1f4e79",
                },

            }],

        }
    }
});
new Chart(document.getElementById("mixed-chart-right-tab-2"), {
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
            data: [10, 110, 110, 115, 125],
            padding: 10

        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#2c5880'
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                barPercentage: 0.7,

            }],
            yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
                gridLines: {
                    display: false
                },
                ticks: {
                    max: 150,
                    min: 0,
                    stepSize: 50,
                    // stepSize: 0.5,
                    // max: Math.max.apply(null, [ < %= arrValue % > ]) + 1,


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
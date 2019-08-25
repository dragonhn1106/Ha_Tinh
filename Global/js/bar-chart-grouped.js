new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
        // labels: [" ", "TX.Kỳ Anh", "", "", " ", "Huyện Cam Lộc",
        //   "Huyện Đức Thọ", "", "Huyện Thạch Hà", "Huyện H.Khê", "Huyện H.Sơn", "Huyện"
        // ],
        labels: [
            ["Huyện", "N.Xuân"],
            ["TX.", "Kỳ Anh", ],
            ["Huyện ", "Lộc hà"],
            ["TP.", "Hà Tĩnh"],
            ["Huyện", "Vũ Quang"],
            ["Huyện", "Cam Lộc"],
            ["Huyện", "Đức Thọ"],
            ["TX.", " H.Lĩnh"],
            ["Huyện", "Thạch Hà"],
            ["Huyện", "H.Khê"],
            ["Huyện", "H.Sơn"],
            ["Huyện", " C.Xuyên"],
        ],
        datasets: [{
                label: "Tổng vốn đầu tư(tỷ VNĐ)",
                backgroundColor: "#f95808",
                data: [133, 221, 783, 2478, 3213, 2222, 4444, 444, 4545, 3213, 1111, 5999]
            },
            {
                label: "Thổng vốn thực thiện(tỷ VNĐ)",
                backgroundColor: "#fbc523",
                data: [408, 547, 675, 734, 1234, 4321, 2222, 4444, 5555, 2134, 3214, 1233],
            }
        ]
    },
    options: {
        title: {},
        legend: {
            display: true,
            position: 'bottom'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    lineWidth: 1,
                    zeroLineWidth: 1,
                    zeroLineColor: '#666666',
                    drawTicks: false
                },
                ticks: {
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
                    max: 6000,
                    min: 0,
                    stepSize: 3000,

                },
            }],
            legend: false,
            responsive: true,
            tooltips: false
        },
    }
});
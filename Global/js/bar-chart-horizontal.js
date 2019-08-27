new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    // labels: [
    //   ["Nông nghiệp, lâm", " ", "Giao thông", "Các ngành khác"],
    //   [" ","trợ giúp xã hội",]
    // ],
    labels: [
      ["Nông nghiệp", "nghiệp, thủy sản"],
      ["Y tế và hoạt động", "trợ giúp xã hội", ],
      ["Giao","thông"],
      ["Các ngành","khác"],
    ],
    datasets: [{
      // label: "Population (millions)",
      backgroundColor: ["#1e9cef", "#f95808", "#fbc523", "#22d294"],
      data: [2478, 5267, 734, 784]
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'bottom'
    },
  }
});
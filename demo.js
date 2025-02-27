const xValues = ["Female", "Male"];
const yValues = [75, 25];
const Colors = ["pink", "gray"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: Colors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,    }
  }
});

new Chartist.Line('.chart1', {
  labels: [0,10, 20, 30, 40, 50,60, 70,80,90,100, 110, 120, 130],
  series: [
    [],
    [],
    [0, 11.5, 14.5, 18, 23.5, 28, 42, 45, 49, 58, 65, 92, 109, 119]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 50
  }
});
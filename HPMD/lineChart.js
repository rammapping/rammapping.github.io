const colorOptions = ["#6aa84f", "#3d85c6", "#e69138", "#674ea7", "#a64d79"]

function assembleLineDataObj(labels, labelText, graphData, border) {
    let data = {
      labels: labels,
      datasets: [{
        label: labelText,
        data: graphData,
        fill: false,
        // borderColor: 'rgb(75, 192, 192)',
        borderColor: border,
        tension: 0.1
      }]
    };
    return data
}


function createLineConfig(data={}, titleText="No Title", displayLegend=true) {
    let config = {
          type: 'line',
          data: data,
          options: {
              responsive: true,
              layout: {
                padding: 50
                },
              interaction: {
                intersect: false,
                mode: 'index',
                },
              plugins: {
                    legend: {
                            display: displayLegend,
                    },
                    title: {
                        display: true,
                        text: titleText
                    }
                },
              scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Season Day'
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: 'Harvests'
                  }
                }
              },
            }            
        };
        return config
}
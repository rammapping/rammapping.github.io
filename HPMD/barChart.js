function assembleBarDataObj(labels, datasetsArray) {
    // let datasetsInventory = [];
    // for (let item in datasetsArray) {
    //     datasetsInventory.push({label: item["label"], data: item["data"], backgroundColor: item["backgroundColor"]})
    // }

    let data = {
        labels: labels,
        datasets: datasetsArray
    };
    return data
}

function createBarConfig(data={}, titleText="No Title") {
    const configBar = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: titleText
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Season'
                      }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Harvests'
                      }
                }
            }
        }
    };
    return configBar
}
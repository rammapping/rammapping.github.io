function setBasemap (basemap) {
    if (layer) {
      map.removeLayer(layer);
    }

    if (basemap === "OpenStreetMap") {
        layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
    } else {
        layer = L.esri.basemapLayer(basemap);
    }

//    layer = L.esri.basemapLayer(basemap);

    map.addLayer(layer);

    // Label Controls
    if (layerLabels) {
      map.removeLayer(layerLabels);
    }

    if (
      basemap === 'ShadedRelief'
    ) {
        layerLabels = L.esri.basemapLayer(basemap + 'Labels');
        map.addLayer(layerLabels);
    } else if (basemap.includes('Imagery')) {
          layerLabels = L.esri.basemapLayer('ImageryLabels');
          map.addLayer(layerLabels);
    } else if (basemap.includes("OpenStreetMap")) {
        false
    }

    }

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}

// function fetchJSON(url) {
//     return fetch(url)
//       .then(function(response) {
//         return response.json();
//       });
//   }


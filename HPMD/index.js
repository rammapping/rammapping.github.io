//function getColor(areaType) {
//
//    return  ["CWMA", "WMA", "NEA", "NRMA", "FMA"].includes(areaType)   ? '#800888' :
//            ["MHA"].includes(areaType)   ? '#969696' :
//            ["SP", "SF", "CFL"].includes(areaType)  ? '#081d58' :
//            ["MHA"].includes(areaType)  ? '#006837' :
//                                       '#252525';
//}

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

var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucinIndicedeHumedad_1 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedad_1 = format_EvolucinIndicedeHumedad_1.readFeatures(json_EvolucinIndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedad_1.addFeatures(features_EvolucinIndicedeHumedad_1);
var lyr_EvolucinIndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedad_1, 
                style: style_EvolucinIndicedeHumedad_1,
                interactive: false,
    title: 'Evolución Indice de Humedad<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_0.png" /> -0,09 - -0,03<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_1.png" /> -0,03 - 0,03<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_2.png" /> 0,03 - 0,08<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_3.png" /> 0,08 - 0,14<br />\
    <img src="styles/legend/EvolucinIndicedeHumedad_1_4.png" /> 0,14 - 0,20<br />'
        });
var format_IndicedeHumedad_2 = new ol.format.GeoJSON();
var features_IndicedeHumedad_2 = format_IndicedeHumedad_2.readFeatures(json_IndicedeHumedad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_2.addFeatures(features_IndicedeHumedad_2);
var lyr_IndicedeHumedad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_2, 
                style: style_IndicedeHumedad_2,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_2_0.png" /> -0,06 - 0,04<br />\
    <img src="styles/legend/IndicedeHumedad_2_1.png" /> 0,04 - 0,14<br />\
    <img src="styles/legend/IndicedeHumedad_2_2.png" /> 0,14 - 0,23<br />\
    <img src="styles/legend/IndicedeHumedad_2_3.png" /> 0,23 - 0,33<br />\
    <img src="styles/legend/IndicedeHumedad_2_4.png" /> 0,33 - 0,43<br />'
        });
var format_Evolucinindicedevegetacion_3 = new ol.format.GeoJSON();
var features_Evolucinindicedevegetacion_3 = format_Evolucinindicedevegetacion_3.readFeatures(json_Evolucinindicedevegetacion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Evolucinindicedevegetacion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Evolucinindicedevegetacion_3.addFeatures(features_Evolucinindicedevegetacion_3);
var lyr_Evolucinindicedevegetacion_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Evolucinindicedevegetacion_3, 
                style: style_Evolucinindicedevegetacion_3,
                interactive: false,
    title: 'Evolución indice de vegetacion<br />\
    <img src="styles/legend/Evolucinindicedevegetacion_3_0.png" /> -0,13 - -0,05<br />\
    <img src="styles/legend/Evolucinindicedevegetacion_3_1.png" /> -0,05 - 0,04<br />\
    <img src="styles/legend/Evolucinindicedevegetacion_3_2.png" /> 0,04 - 0,12<br />\
    <img src="styles/legend/Evolucinindicedevegetacion_3_3.png" /> 0,12 - 0,21<br />\
    <img src="styles/legend/Evolucinindicedevegetacion_3_4.png" /> 0,21 - 0,29<br />'
        });
var format_IndicedeVegetacion_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacion_4 = format_IndicedeVegetacion_4.readFeatures(json_IndicedeVegetacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacion_4.addFeatures(features_IndicedeVegetacion_4);
var lyr_IndicedeVegetacion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacion_4, 
                style: style_IndicedeVegetacion_4,
                interactive: false,
    title: 'Indice de Vegetacion<br />\
    <img src="styles/legend/IndicedeVegetacion_4_0.png" /> 0,19 - 0,32<br />\
    <img src="styles/legend/IndicedeVegetacion_4_1.png" /> 0,32 - 0,45<br />\
    <img src="styles/legend/IndicedeVegetacion_4_2.png" /> 0,45 - 0,58<br />\
    <img src="styles/legend/IndicedeVegetacion_4_3.png" /> 0,58 - 0,71<br />\
    <img src="styles/legend/IndicedeVegetacion_4_4.png" /> 0,71 - 0,84<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucinIndicedeHumedad_1.setVisible(true);lyr_IndicedeHumedad_2.setVisible(true);lyr_Evolucinindicedevegetacion_3.setVisible(true);lyr_IndicedeVegetacion_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucinIndicedeHumedad_1,lyr_IndicedeHumedad_2,lyr_Evolucinindicedevegetacion_3,lyr_IndicedeVegetacion_4];
lyr_EvolucinIndicedeHumedad_1.set('fieldAliases', {'E_NDMI': 'E_NDMI', });
lyr_IndicedeHumedad_2.set('fieldAliases', {'NDMI': 'NDMI', });
lyr_Evolucinindicedevegetacion_3.set('fieldAliases', {'E_NDVI': 'E_NDVI', });
lyr_IndicedeVegetacion_4.set('fieldAliases', {'NDVI': 'NDVI', });
lyr_EvolucinIndicedeHumedad_1.set('fieldImages', {'E_NDMI': '', });
lyr_IndicedeHumedad_2.set('fieldImages', {'NDMI': '', });
lyr_Evolucinindicedevegetacion_3.set('fieldImages', {'E_NDVI': 'TextEdit', });
lyr_IndicedeVegetacion_4.set('fieldImages', {'NDVI': 'TextEdit', });
lyr_EvolucinIndicedeHumedad_1.set('fieldLabels', {'E_NDMI': 'no label', });
lyr_IndicedeHumedad_2.set('fieldLabels', {'NDMI': 'no label', });
lyr_Evolucinindicedevegetacion_3.set('fieldLabels', {'E_NDVI': 'no label', });
lyr_IndicedeVegetacion_4.set('fieldLabels', {'NDVI': 'no label', });
lyr_IndicedeVegetacion_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
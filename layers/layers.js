var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "Alberta Boundary",
                interactive: true,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> Alberta Boundary'
            });
var format_waterbodies_alberta_1 = new ol.format.GeoJSON();
var features_waterbodies_alberta_1 = format_waterbodies_alberta_1.readFeatures(json_waterbodies_alberta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbodies_alberta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbodies_alberta_1.addFeatures(features_waterbodies_alberta_1);
var lyr_waterbodies_alberta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterbodies_alberta_1, 
                style: style_waterbodies_alberta_1,
                popuplayertitle: "waterbodies_alberta",
                interactive: true,
                title: '<img src="styles/legend/waterbodies_alberta_1.png" /> waterbodies_alberta'
            });
var format_FishStockingPoints_2 = new ol.format.GeoJSON();
var features_FishStockingPoints_2 = format_FishStockingPoints_2.readFeatures(json_FishStockingPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_2.addFeatures(features_FishStockingPoints_2);
var lyr_FishStockingPoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_2, 
                style: style_FishStockingPoints_2,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
    title: 'Fish Stocking Points<br />\
    <img src="styles/legend/FishStockingPoints_2_0.png" /> 15 - 350<br />\
    <img src="styles/legend/FishStockingPoints_2_1.png" /> 350 - 911<br />\
    <img src="styles/legend/FishStockingPoints_2_2.png" /> 911 - 2000<br />\
    <img src="styles/legend/FishStockingPoints_2_3.png" /> 2000 - 4240<br />\
    <img src="styles/legend/FishStockingPoints_2_4.png" /> 4240 - 1613075<br />'
        });

lyr_AlbertaBoundary_0.setVisible(true);lyr_waterbodies_alberta_1.setVisible(true);lyr_FishStockingPoints_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_waterbodies_alberta_1,lyr_FishStockingPoints_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_waterbodies_alberta_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStockingPoints_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Species_1': 'Species_1', 'StockingNu': 'StockingNu', });
lyr_AlbertaBoundary_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_waterbodies_alberta_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_FishStockingPoints_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Species_1': 'TextEdit', 'StockingNu': 'Range', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_waterbodies_alberta_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_FishStockingPoints_2.set('fieldLabels', {'DISTRICT': 'no label', 'WATERBODY': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'SPECIES': 'no label', 'GENOTYPE': 'no label', 'STOCKED -': 'no label', 'STOCKING N': 'no label', 'PLANNED ST': 'no label', 'Species_1': 'no label', 'StockingNu': 'no label', });
lyr_FishStockingPoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
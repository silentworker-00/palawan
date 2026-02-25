var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lmu_2_3 = new ol.format.GeoJSON();
var features_lmu_2_3 = format_lmu_2_3.readFeatures(json_lmu_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_2_3.addFeatures(features_lmu_2_3);
var lyr_lmu_2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_2_3, 
                style: style_lmu_2_3,
                popuplayertitle: 'lmu_2',
                interactive: false,
    title: 'lmu_2<br />\
    <img src="styles/legend/lmu_2_3_0.png" /> 31<br />\
    <img src="styles/legend/lmu_2_3_1.png" /> 32<br />\
    <img src="styles/legend/lmu_2_3_2.png" /> 39<br />\
    <img src="styles/legend/lmu_2_3_3.png" /> 44<br />\
    <img src="styles/legend/lmu_2_3_4.png" /> 45<br />\
    <img src="styles/legend/lmu_2_3_5.png" /> 46<br />\
    <img src="styles/legend/lmu_2_3_6.png" /> 47<br />\
    <img src="styles/legend/lmu_2_3_7.png" /> 48<br />\
    <img src="styles/legend/lmu_2_3_8.png" /> 50<br />\
    <img src="styles/legend/lmu_2_3_9.png" /> 51<br />\
    <img src="styles/legend/lmu_2_3_10.png" /> <br />' });
var format_lmu_1_4 = new ol.format.GeoJSON();
var features_lmu_1_4 = format_lmu_1_4.readFeatures(json_lmu_1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_1_4.addFeatures(features_lmu_1_4);
var lyr_lmu_1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_1_4, 
                style: style_lmu_1_4,
                popuplayertitle: 'lmu_1',
                interactive: false,
    title: 'lmu_1<br />\
    <img src="styles/legend/lmu_1_4_0.png" /> 12<br />\
    <img src="styles/legend/lmu_1_4_1.png" /> 14<br />\
    <img src="styles/legend/lmu_1_4_2.png" /> 16<br />\
    <img src="styles/legend/lmu_1_4_3.png" /> 17<br />\
    <img src="styles/legend/lmu_1_4_4.png" /> 18<br />\
    <img src="styles/legend/lmu_1_4_5.png" /> <br />' });
var format_lmu_7_5 = new ol.format.GeoJSON();
var features_lmu_7_5 = format_lmu_7_5.readFeatures(json_lmu_7_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_7_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_7_5.addFeatures(features_lmu_7_5);
var lyr_lmu_7_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_7_5, 
                style: style_lmu_7_5,
                popuplayertitle: 'lmu_7',
                interactive: false,
    title: 'lmu_7<br />\
    <img src="styles/legend/lmu_7_5_0.png" /> 117<br />\
    <img src="styles/legend/lmu_7_5_1.png" /> 118<br />\
    <img src="styles/legend/lmu_7_5_2.png" /> 124<br />\
    <img src="styles/legend/lmu_7_5_3.png" /> 126<br />\
    <img src="styles/legend/lmu_7_5_4.png" /> 128<br />\
    <img src="styles/legend/lmu_7_5_5.png" /> 140<br />\
    <img src="styles/legend/lmu_7_5_6.png" /> 156<br />\
    <img src="styles/legend/lmu_7_5_7.png" /> 160<br />\
    <img src="styles/legend/lmu_7_5_8.png" /> 161<br />\
    <img src="styles/legend/lmu_7_5_9.png" /> 162<br />\
    <img src="styles/legend/lmu_7_5_10.png" /> 165<br />\
    <img src="styles/legend/lmu_7_5_11.png" /> 174<br />\
    <img src="styles/legend/lmu_7_5_12.png" /> <br />' });
var format_lmu_8_6 = new ol.format.GeoJSON();
var features_lmu_8_6 = format_lmu_8_6.readFeatures(json_lmu_8_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_8_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_8_6.addFeatures(features_lmu_8_6);
var lyr_lmu_8_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_8_6, 
                style: style_lmu_8_6,
                popuplayertitle: 'lmu_8',
                interactive: false,
    title: 'lmu_8<br />\
    <img src="styles/legend/lmu_8_6_0.png" /> 125<br />\
    <img src="styles/legend/lmu_8_6_1.png" /> <br />' });
var format_lmu_6_7 = new ol.format.GeoJSON();
var features_lmu_6_7 = format_lmu_6_7.readFeatures(json_lmu_6_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_6_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_6_7.addFeatures(features_lmu_6_7);
var lyr_lmu_6_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_6_7, 
                style: style_lmu_6_7,
                popuplayertitle: 'lmu_6',
                interactive: false,
    title: 'lmu_6<br />\
    <img src="styles/legend/lmu_6_7_0.png" /> 88<br />\
    <img src="styles/legend/lmu_6_7_1.png" /> <br />' });
var format_lmu_4_8 = new ol.format.GeoJSON();
var features_lmu_4_8 = format_lmu_4_8.readFeatures(json_lmu_4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_4_8.addFeatures(features_lmu_4_8);
var lyr_lmu_4_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_4_8, 
                style: style_lmu_4_8,
                popuplayertitle: 'lmu_4',
                interactive: false,
    title: 'lmu_4<br />\
    <img src="styles/legend/lmu_4_8_0.png" /> 52<br />\
    <img src="styles/legend/lmu_4_8_1.png" /> 55<br />\
    <img src="styles/legend/lmu_4_8_2.png" /> 61<br />\
    <img src="styles/legend/lmu_4_8_3.png" /> 62<br />\
    <img src="styles/legend/lmu_4_8_4.png" /> 63<br />\
    <img src="styles/legend/lmu_4_8_5.png" /> 66<br />\
    <img src="styles/legend/lmu_4_8_6.png" /> 76<br />\
    <img src="styles/legend/lmu_4_8_7.png" /> 77<br />\
    <img src="styles/legend/lmu_4_8_8.png" /> 78<br />\
    <img src="styles/legend/lmu_4_8_9.png" /> 80<br />\
    <img src="styles/legend/lmu_4_8_10.png" /> <br />' });
var format_lmu_5_9 = new ol.format.GeoJSON();
var features_lmu_5_9 = format_lmu_5_9.readFeatures(json_lmu_5_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_5_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_5_9.addFeatures(features_lmu_5_9);
var lyr_lmu_5_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_5_9, 
                style: style_lmu_5_9,
                popuplayertitle: 'lmu_5',
                interactive: false,
    title: 'lmu_5<br />\
    <img src="styles/legend/lmu_5_9_0.png" /> 84<br />\
    <img src="styles/legend/lmu_5_9_1.png" /> 87<br />\
    <img src="styles/legend/lmu_5_9_2.png" /> 88<br />\
    <img src="styles/legend/lmu_5_9_3.png" /> 89<br />\
    <img src="styles/legend/lmu_5_9_4.png" /> 90<br />\
    <img src="styles/legend/lmu_5_9_5.png" /> 91<br />\
    <img src="styles/legend/lmu_5_9_6.png" /> 109<br />\
    <img src="styles/legend/lmu_5_9_7.png" /> 110<br />\
    <img src="styles/legend/lmu_5_9_8.png" /> 111<br />\
    <img src="styles/legend/lmu_5_9_9.png" /> 112<br />\
    <img src="styles/legend/lmu_5_9_10.png" /> <br />' });
var format_lmu_9_10 = new ol.format.GeoJSON();
var features_lmu_9_10 = format_lmu_9_10.readFeatures(json_lmu_9_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_9_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_9_10.addFeatures(features_lmu_9_10);
var lyr_lmu_9_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_9_10, 
                style: style_lmu_9_10,
                popuplayertitle: 'lmu_9',
                interactive: false,
    title: 'lmu_9<br />\
    <img src="styles/legend/lmu_9_10_0.png" /> 3<br />\
    <img src="styles/legend/lmu_9_10_1.png" /> 4<br />\
    <img src="styles/legend/lmu_9_10_2.png" /> 7<br />\
    <img src="styles/legend/lmu_9_10_3.png" /> 8<br />\
    <img src="styles/legend/lmu_9_10_4.png" /> 9<br />\
    <img src="styles/legend/lmu_9_10_5.png" /> <br />' });
var format_lmu_2_11 = new ol.format.GeoJSON();
var features_lmu_2_11 = format_lmu_2_11.readFeatures(json_lmu_2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lmu_2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lmu_2_11.addFeatures(features_lmu_2_11);
var lyr_lmu_2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lmu_2_11, 
                style: style_lmu_2_11,
                popuplayertitle: 'lmu_2',
                interactive: false,
    title: 'lmu_2<br />\
    <img src="styles/legend/lmu_2_11_0.png" /> 19<br />\
    <img src="styles/legend/lmu_2_11_1.png" /> 21<br />\
    <img src="styles/legend/lmu_2_11_2.png" /> 22<br />\
    <img src="styles/legend/lmu_2_11_3.png" /> 23<br />\
    <img src="styles/legend/lmu_2_11_4.png" /> 25<br />\
    <img src="styles/legend/lmu_2_11_5.png" /> 26<br />\
    <img src="styles/legend/lmu_2_11_6.png" /> 27<br />\
    <img src="styles/legend/lmu_2_11_7.png" /> 28<br />\
    <img src="styles/legend/lmu_2_11_8.png" /> 29<br />\
    <img src="styles/legend/lmu_2_11_9.png" /> 30<br />\
    <img src="styles/legend/lmu_2_11_10.png" /> <br />' });
var format_Boundary_2_2_12 = new ol.format.GeoJSON();
var features_Boundary_2_2_12 = format_Boundary_2_2_12.readFeatures(json_Boundary_2_2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_2_2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_2_2_12.addFeatures(features_Boundary_2_2_12);
var lyr_Boundary_2_2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_2_2_12, 
                style: style_Boundary_2_2_12,
                popuplayertitle: 'Boundary_2_2',
                interactive: false,
                title: '<img src="styles/legend/Boundary_2_2_12.png" /> Boundary_2_2'
            });
var format_Boundary_2_3_13 = new ol.format.GeoJSON();
var features_Boundary_2_3_13 = format_Boundary_2_3_13.readFeatures(json_Boundary_2_3_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_2_3_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_2_3_13.addFeatures(features_Boundary_2_3_13);
var lyr_Boundary_2_3_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_2_3_13, 
                style: style_Boundary_2_3_13,
                popuplayertitle: 'Boundary_2_3',
                interactive: false,
                title: '<img src="styles/legend/Boundary_2_3_13.png" /> Boundary_2_3'
            });
var format_Boundary_1_1_14 = new ol.format.GeoJSON();
var features_Boundary_1_1_14 = format_Boundary_1_1_14.readFeatures(json_Boundary_1_1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_1_1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_1_1_14.addFeatures(features_Boundary_1_1_14);
var lyr_Boundary_1_1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_1_1_14, 
                style: style_Boundary_1_1_14,
                popuplayertitle: 'Boundary_1_1',
                interactive: false,
                title: '<img src="styles/legend/Boundary_1_1_14.png" /> Boundary_1_1'
            });
var format_Boundary_1_2_15 = new ol.format.GeoJSON();
var features_Boundary_1_2_15 = format_Boundary_1_2_15.readFeatures(json_Boundary_1_2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_1_2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_1_2_15.addFeatures(features_Boundary_1_2_15);
var lyr_Boundary_1_2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_1_2_15, 
                style: style_Boundary_1_2_15,
                popuplayertitle: 'Boundary_1_2',
                interactive: false,
                title: '<img src="styles/legend/Boundary_1_2_15.png" /> Boundary_1_2'
            });
var format_POINTs_16 = new ol.format.GeoJSON();
var features_POINTs_16 = format_POINTs_16.readFeatures(json_POINTs_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINTs_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTs_16.addFeatures(features_POINTs_16);
cluster_POINTs_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POINTs_16
});
var lyr_POINTs_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POINTs_16, 
                style: style_POINTs_16,
                popuplayertitle: 'POINTs',
                interactive: true,
                title: '<img src="styles/legend/POINTs_16.png" /> POINTs'
            });
var group_BNDRY = new ol.layer.Group({
                                layers: [lyr_Boundary_2_2_12,lyr_Boundary_2_3_13,lyr_Boundary_1_1_14,lyr_Boundary_1_2_15,],
                                fold: 'open',
                                title: 'BNDRY'});
var group_LMU = new ol.layer.Group({
                                layers: [lyr_lmu_2_3,lyr_lmu_1_4,lyr_lmu_7_5,lyr_lmu_8_6,lyr_lmu_6_7,lyr_lmu_4_8,lyr_lmu_5_9,lyr_lmu_9_10,lyr_lmu_2_11,],
                                fold: 'open',
                                title: 'LMU'});

lyr_EsriTopographic_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_lmu_2_3.setVisible(true);lyr_lmu_1_4.setVisible(true);lyr_lmu_7_5.setVisible(true);lyr_lmu_8_6.setVisible(true);lyr_lmu_6_7.setVisible(true);lyr_lmu_4_8.setVisible(true);lyr_lmu_5_9.setVisible(true);lyr_lmu_9_10.setVisible(true);lyr_lmu_2_11.setVisible(true);lyr_Boundary_2_2_12.setVisible(true);lyr_Boundary_2_3_13.setVisible(true);lyr_Boundary_1_1_14.setVisible(true);lyr_Boundary_1_2_15.setVisible(true);lyr_POINTs_16.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,group_LMU,group_BNDRY,lyr_POINTs_16];
lyr_lmu_2_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_lmu_1_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_lmu_7_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_lmu_8_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_lmu_6_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_lmu_4_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_lmu_5_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_lmu_9_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_lmu_2_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LMU': 'LMU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', });
lyr_Boundary_2_2_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Boundary_2_3_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Boundary_1_1_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Boundary_1_2_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_POINTs_16.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Palawa': 'FID_Palawa', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'SOILDESC': 'SOILDESC', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'TEXTURE_5': 'TEXTURE_5', 'DRAINAGE_5': 'DRAINAGE_5', 'SOIL_REACT': 'SOIL_REACT', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'SLOPE': 'SLOPE', 'FLOODING': 'FLOODING', 'DRAINAGE': 'DRAINAGE', 'TEXTURE': 'TEXTURE', 'ROC': 'ROC', 'DEPTH': 'DEPTH', 'CEC': 'CEC', 'BASE_SAT': 'BASE_SAT', 'OM': 'OM', 'PH': 'PH', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'FID_POINTs': 'FID_POINTs', 'Id': 'Id', });
lyr_lmu_2_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_lmu_1_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_lmu_7_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_lmu_8_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_lmu_6_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_lmu_4_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_lmu_5_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_lmu_9_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_lmu_2_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'LMU': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', });
lyr_Boundary_2_2_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Boundary_2_3_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Boundary_1_1_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Boundary_1_2_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_POINTs_16.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Palawa': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'SOILDESC': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'TEXTURE_5': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'SOIL_REACT': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'SLOPE': 'TextEdit', 'FLOODING': 'TextEdit', 'DRAINAGE': 'TextEdit', 'TEXTURE': 'TextEdit', 'ROC': 'TextEdit', 'DEPTH': 'TextEdit', 'CEC': 'TextEdit', 'BASE_SAT': 'TextEdit', 'OM': 'TextEdit', 'PH': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_POINTs': 'TextEdit', 'Id': 'TextEdit', });
lyr_lmu_2_3.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_lmu_1_4.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_lmu_7_5.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_lmu_8_6.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_lmu_6_7.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_lmu_4_8.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_lmu_5_9.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_lmu_9_10.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_lmu_2_11.set('fieldLabels', {'OBJECTID': 'no label', 'LMU': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', });
lyr_Boundary_2_2_12.set('fieldLabels', {'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Boundary_2_3_13.set('fieldLabels', {'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Boundary_1_1_14.set('fieldLabels', {'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Boundary_1_2_15.set('fieldLabels', {'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_POINTs_16.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'FID_Palawa': 'hidden field', 'OBJECTID_2': 'hidden field', 'OBJECTID': 'hidden field', 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'SOILDESC': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'TEXTURE_5': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'SOIL_REACT': 'hidden field', 'INHER_FERT': 'hidden field', 'FLOODING_5': 'hidden field', 'EROSION_5': 'hidden field', 'ROCK_OUT_5': 'hidden field', 'SLOPE': 'inline label - visible with data', 'FLOODING': 'inline label - visible with data', 'DRAINAGE': 'inline label - visible with data', 'TEXTURE': 'inline label - visible with data', 'ROC': 'inline label - visible with data', 'DEPTH': 'inline label - visible with data', 'CEC': 'hidden field', 'BASE_SAT': 'hidden field', 'OM': 'hidden field', 'PH': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'FID_POINTs': 'hidden field', 'Id': 'hidden field', });
lyr_POINTs_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
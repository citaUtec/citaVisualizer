//<editor-fold desc="VARIABLES">

/**
 * @param activeRiverIndex: Index for each river (0: Amazonas, 1: Huallaga, 2:Marañon, 3: Ucayali)
 * @param last_disabled_river_removed: Index for each disabled river (0: Amazonas, 1: Huallaga, 2:Marañon, 3: Ucayali)
 * @param communities_enabled: Boolean indicating communities data layer visibility
 * @param dem_enabled: Boolean indicating DEM data layer visibility
 * @param fires_enabled: Boolean indicating malos pasos data layer visibility
 */
//0:1989, 1:1993, 2:1997, 3:2001, 4:2005, 5:2009, 6:2013, 7:2017 -> Huallaga, Ucayali
//0:1987, 1:1993, 2:1999, 3:2005, 4:2011, 5:20017 -> Amazonas, Marañon
var activeRiverIndex = -1;
var last_disabled_river_removed = -1;
var communities_enabled = false;
var dem_enabled = false;
var fires_enabled = false;


/**
 * Leaflet data layers
 */

var amazonas_outline_layer = new L.GeoJSON();


/**
 * Map Bounds Layers
 */

var south_america_limits_data_layer = new L.GeoJSON();


/**
 * Morphometrics Data layers
 * Each layer is divided by year for better results with the progress bar animation (the animation looks smoother when each layer is defined as
 * a single variable instead of using a unique variable for all the layers)
 */

/**
 * Amazonas Layers
 */
var amazonas_disabled_river_data_layer = new L.GeoJSON();
var amazonas_river_outline_data_layer = new L.GeoJSON();
var amazonas_avg_width_data_layer_1987 = new L.GeoJSON();
var amazonas_avg_width_data_layer_1993 = new L.GeoJSON();
var amazonas_avg_width_data_layer_1999 = new L.GeoJSON();
var amazonas_avg_width_data_layer_2005 = new L.GeoJSON();
var amazonas_avg_width_data_layer_2011 = new L.GeoJSON();
var amazonas_avg_width_data_layer_2017 = new L.GeoJSON();
var amazonas_sinuosity_data_layer_1987 = new L.GeoJSON();
var amazonas_sinuosity_data_layer_1993 = new L.GeoJSON();
var amazonas_sinuosity_data_layer_1999 = new L.GeoJSON();
var amazonas_sinuosity_data_layer_2005 = new L.GeoJSON();
var amazonas_sinuosity_data_layer_2011 = new L.GeoJSON();
var amazonas_sinuosity_data_layer_2017 = new L.GeoJSON();
var amazonas_wavelength_data_layer_1987 = new L.GeoJSON();
var amazonas_wavelength_data_layer_1993 = new L.GeoJSON();
var amazonas_wavelength_data_layer_1999 = new L.GeoJSON();
var amazonas_wavelength_data_layer_2005 = new L.GeoJSON();
var amazonas_wavelength_data_layer_2011 = new L.GeoJSON();
var amazonas_wavelength_data_layer_2017 = new L.GeoJSON();
var amazonas_upper_avg_width_data_layer_1987 = new L.GeoJSON();
var amazonas_upper_avg_width_data_layer_1993 = new L.GeoJSON();
var amazonas_upper_avg_width_data_layer_1999 = new L.GeoJSON();
var amazonas_upper_avg_width_data_layer_2005 = new L.GeoJSON();
var amazonas_upper_avg_width_data_layer_2011 = new L.GeoJSON();
var amazonas_upper_avg_width_data_layer_2017 = new L.GeoJSON();
var amazonas_upper_sinuosity_data_layer_1987 = new L.GeoJSON();
var amazonas_upper_sinuosity_data_layer_1993 = new L.GeoJSON();
var amazonas_upper_sinuosity_data_layer_1999 = new L.GeoJSON();
var amazonas_upper_sinuosity_data_layer_2005 = new L.GeoJSON();
var amazonas_upper_sinuosity_data_layer_2011 = new L.GeoJSON();
var amazonas_upper_sinuosity_data_layer_2017 = new L.GeoJSON();
var amazonas_upper_wavelength_data_layer_1987 = new L.GeoJSON();
var amazonas_upper_wavelength_data_layer_1993 = new L.GeoJSON();
var amazonas_upper_wavelength_data_layer_1999 = new L.GeoJSON();
var amazonas_upper_wavelength_data_layer_2005 = new L.GeoJSON();
var amazonas_upper_wavelength_data_layer_2011 = new L.GeoJSON();
var amazonas_upper_wavelength_data_layer_2017 = new L.GeoJSON();
var amazonas_upper_confinement_data_layer_1987 = new L.GeoJSON();
var amazonas_upper_confinement_data_layer_1993 = new L.GeoJSON();
var amazonas_upper_confinement_data_layer_1999 = new L.GeoJSON();
var amazonas_upper_confinement_data_layer_2005 = new L.GeoJSON();
var amazonas_upper_confinement_data_layer_2011 = new L.GeoJSON();
var amazonas_upper_confinement_data_layer_2017 = new L.GeoJSON();
var amazonas_islands_data_layer_1987 = new L.GeoJSON();
var amazonas_islands_data_layer_1993 = new L.GeoJSON();
var amazonas_islands_data_layer_1999 = new L.GeoJSON();
var amazonas_islands_data_layer_2005 = new L.GeoJSON();
var amazonas_islands_data_layer_2011 = new L.GeoJSON();
var amazonas_islands_data_layer_2017 = new L.GeoJSON();
var amazonas_erosion_deposition_NC_data_layer_1993 = new L.GeoJSON();
var amazonas_erosion_deposition_D_data_layer_1993 = new L.GeoJSON();
var amazonas_erosion_deposition_E_data_layer_1993 = new L.GeoJSON();
var amazonas_erosion_deposition_NC_data_layer_1999 = new L.GeoJSON();
var amazonas_erosion_deposition_D_data_layer_1999 = new L.GeoJSON();
var amazonas_erosion_deposition_E_data_layer_1999 = new L.GeoJSON();
var amazonas_erosion_deposition_NC_data_layer_2005 = new L.GeoJSON();
var amazonas_erosion_deposition_D_data_layer_2005 = new L.GeoJSON();
var amazonas_erosion_deposition_E_data_layer_2005 = new L.GeoJSON();
var amazonas_erosion_deposition_NC_data_layer_2011 = new L.GeoJSON();
var amazonas_erosion_deposition_D_data_layer_2011 = new L.GeoJSON();
var amazonas_erosion_deposition_E_data_layer_2011 = new L.GeoJSON();
var amazonas_erosion_deposition_NC_data_layer_2017 = new L.GeoJSON();
var amazonas_erosion_deposition_D_data_layer_2017 = new L.GeoJSON();
var amazonas_erosion_deposition_E_data_layer_2017 = new L.GeoJSON();
// var amazonas_dunes_campaign_1_sections_layer;
// var amazonas_dunes_campaign_1_lines_layer;
// var amazonas_dunes_campaign_2_sections_layer;
// var amazonas_dunes_campaign_2_lines_layer;
// var amazonas_dunes_campaign_3_sections_layer;
// var amazonas_dunes_campaign_3_lines_layer;
var amazonas_bedload_campaign_1_sections_layer = new L.GeoJSON();
var amazonas_bedload_campaign_2_sections_layer = new L.GeoJSON();
var amazonas_bedload_campaign_3_sections_layer = new L.GeoJSON();



/**
 * Huallaga Layers
 */
var huallaga_disabled_river_data_layer = new L.GeoJSON();
var huallaga_river_outline_data_layer = new L.GeoJSON();
var huallaga_avg_width_data_layer_1989 = new L.GeoJSON();
var huallaga_avg_width_data_layer_1993 = new L.GeoJSON();
var huallaga_avg_width_data_layer_1997 = new L.GeoJSON();
var huallaga_avg_width_data_layer_2001 = new L.GeoJSON();
var huallaga_avg_width_data_layer_2005 = new L.GeoJSON();
var huallaga_avg_width_data_layer_2009 = new L.GeoJSON();
var huallaga_avg_width_data_layer_2013 = new L.GeoJSON();
var huallaga_avg_width_data_layer_2017 = new L.GeoJSON();
var huallaga_sinuosity_data_layer_1989 = new L.GeoJSON();
var huallaga_sinuosity_data_layer_1993 = new L.GeoJSON();
var huallaga_sinuosity_data_layer_1997 = new L.GeoJSON();
var huallaga_sinuosity_data_layer_2001 = new L.GeoJSON();
var huallaga_sinuosity_data_layer_2005 = new L.GeoJSON();
var huallaga_sinuosity_data_layer_2009 = new L.GeoJSON();
var huallaga_sinuosity_data_layer_2013 = new L.GeoJSON();
var huallaga_sinuosity_data_layer_2017 = new L.GeoJSON();
var huallaga_wavelength_data_layer_1989 = new L.GeoJSON();
var huallaga_wavelength_data_layer_1993 = new L.GeoJSON();
var huallaga_wavelength_data_layer_1997 = new L.GeoJSON();
var huallaga_wavelength_data_layer_2001 = new L.GeoJSON();
var huallaga_wavelength_data_layer_2005 = new L.GeoJSON();
var huallaga_wavelength_data_layer_2009 = new L.GeoJSON();
var huallaga_wavelength_data_layer_2013 = new L.GeoJSON();
var huallaga_wavelength_data_layer_2017 = new L.GeoJSON();
var huallaga_upper_avg_width_data_layer_1989 = new L.GeoJSON();
var huallaga_upper_avg_width_data_layer_1993 = new L.GeoJSON();
var huallaga_upper_avg_width_data_layer_1997 = new L.GeoJSON();
var huallaga_upper_avg_width_data_layer_2001 = new L.GeoJSON();
var huallaga_upper_avg_width_data_layer_2005 = new L.GeoJSON();
var huallaga_upper_avg_width_data_layer_2009 = new L.GeoJSON();
var huallaga_upper_avg_width_data_layer_2013 = new L.GeoJSON();
var huallaga_upper_avg_width_data_layer_2017 = new L.GeoJSON();
var huallaga_upper_sinuosity_data_layer_1989 = new L.GeoJSON();
var huallaga_upper_sinuosity_data_layer_1993 = new L.GeoJSON();
var huallaga_upper_sinuosity_data_layer_1997 = new L.GeoJSON();
var huallaga_upper_sinuosity_data_layer_2001 = new L.GeoJSON();
var huallaga_upper_sinuosity_data_layer_2005 = new L.GeoJSON();
var huallaga_upper_sinuosity_data_layer_2009 = new L.GeoJSON();
var huallaga_upper_sinuosity_data_layer_2013 = new L.GeoJSON();
var huallaga_upper_sinuosity_data_layer_2017 = new L.GeoJSON();
var huallaga_upper_wavelength_data_layer_1989 = new L.GeoJSON();
var huallaga_upper_wavelength_data_layer_1993 = new L.GeoJSON();
var huallaga_upper_wavelength_data_layer_1997 = new L.GeoJSON();
var huallaga_upper_wavelength_data_layer_2001 = new L.GeoJSON();
var huallaga_upper_wavelength_data_layer_2005 = new L.GeoJSON();
var huallaga_upper_wavelength_data_layer_2009 = new L.GeoJSON();
var huallaga_upper_wavelength_data_layer_2013 = new L.GeoJSON();
var huallaga_upper_wavelength_data_layer_2017 = new L.GeoJSON();
var huallaga_upper_confinement_data_layer_1989 = new L.GeoJSON();
var huallaga_upper_confinement_data_layer_1993 = new L.GeoJSON();
var huallaga_upper_confinement_data_layer_1997 = new L.GeoJSON();
var huallaga_upper_confinement_data_layer_2001 = new L.GeoJSON();
var huallaga_upper_confinement_data_layer_2005 = new L.GeoJSON();
var huallaga_upper_confinement_data_layer_2009 = new L.GeoJSON();
var huallaga_upper_confinement_data_layer_2013 = new L.GeoJSON();
var huallaga_upper_confinement_data_layer_2017 = new L.GeoJSON();
var huallaga_islands_data_layer_1987 = new L.GeoJSON();
var huallaga_islands_data_layer_1993 = new L.GeoJSON();
var huallaga_islands_data_layer_1999 = new L.GeoJSON();
var huallaga_islands_data_layer_2005 = new L.GeoJSON();
var huallaga_islands_data_layer_2011 = new L.GeoJSON();
var huallaga_islands_data_layer_2017 = new L.GeoJSON();
var huallaga_migration_data_layers;
var huallaga_migration_1987_1989_data_layer = new L.GeoJSON();
var huallaga_migration_1989_1993_data_layer = new L.GeoJSON();
var huallaga_migration_1993_1997_data_layer = new L.GeoJSON();
var huallaga_migration_1997_2001_data_layer = new L.GeoJSON();
var huallaga_migration_2001_2005_data_layer = new L.GeoJSON();
var huallaga_migration_2005_2009_data_layer = new L.GeoJSON();
var huallaga_migration_2009_2013_data_layer = new L.GeoJSON();
var huallaga_migration_2013_2017_data_layer = new L.GeoJSON();


var huallaga_upper_migration_data_layers;
var huallaga_upper_migration_1987_1989_data_layer = new L.GeoJSON();
var huallaga_upper_migration_1989_1993_data_layer = new L.GeoJSON();
var huallaga_upper_migration_1993_1997_data_layer = new L.GeoJSON();
var huallaga_upper_migration_1997_2001_data_layer = new L.GeoJSON();
var huallaga_upper_migration_2001_2005_data_layer = new L.GeoJSON();
var huallaga_upper_migration_2005_2009_data_layer = new L.GeoJSON();
var huallaga_upper_migration_2009_2013_data_layer = new L.GeoJSON();
var huallaga_upper_migration_2013_2017_data_layer = new L.GeoJSON();


var huallaga_dunes_campaign_1_sections_layer = new L.GeoJSON();
var huallaga_dunes_campaign_1_lines_layer = new L.GeoJSON();
var huallaga_dunes_campaign_2_sections_layer = new L.GeoJSON();
// var huallaga_dunes_campaign_2_lines_layer;
// var huallaga_dunes_campaign_3_sections_layer;
// var huallaga_dunes_campaign_3_lines_layer;
var huallaga_bedload_campaign_1_sections_layer = new L.GeoJSON();
var huallaga_bedload_campaign_2_sections_layer = new L.GeoJSON();
var huallaga_bedload_campaign_3_sections_layer = new L.GeoJSON();

/**
 * Marañon Layers
 */
var marañon_disabled_river_data_layer = new L.GeoJSON();
var marañon_river_outline_data_layer = new L.GeoJSON();
var marañon_avg_width_data_layer_1987 = new L.GeoJSON();
var marañon_avg_width_data_layer_1993 = new L.GeoJSON();
var marañon_avg_width_data_layer_1999 = new L.GeoJSON();
var marañon_avg_width_data_layer_2005 = new L.GeoJSON();
var marañon_avg_width_data_layer_2011 = new L.GeoJSON();
var marañon_avg_width_data_layer_2017 = new L.GeoJSON();
var marañon_sinuosity_data_layer_1987 = new L.GeoJSON();
var marañon_sinuosity_data_layer_1993 = new L.GeoJSON();
var marañon_sinuosity_data_layer_1999 = new L.GeoJSON();
var marañon_sinuosity_data_layer_2005 = new L.GeoJSON();
var marañon_sinuosity_data_layer_2011 = new L.GeoJSON();
var marañon_sinuosity_data_layer_2017 = new L.GeoJSON();
var marañon_wavelength_data_layer_1987 = new L.GeoJSON();
var marañon_wavelength_data_layer_1993 = new L.GeoJSON();
var marañon_wavelength_data_layer_1999 = new L.GeoJSON();
var marañon_wavelength_data_layer_2005 = new L.GeoJSON();
var marañon_wavelength_data_layer_2011 = new L.GeoJSON();
var marañon_wavelength_data_layer_2017 = new L.GeoJSON();
var marañon_upper_avg_width_data_layer_1987 = new L.GeoJSON();
var marañon_upper_avg_width_data_layer_1993 = new L.GeoJSON();
var marañon_upper_avg_width_data_layer_1999 = new L.GeoJSON();
var marañon_upper_avg_width_data_layer_2005 = new L.GeoJSON();
var marañon_upper_avg_width_data_layer_2011 = new L.GeoJSON();
var marañon_upper_avg_width_data_layer_2017 = new L.GeoJSON();
var marañon_upper_sinuosity_data_layer_1987 = new L.GeoJSON();
var marañon_upper_sinuosity_data_layer_1993 = new L.GeoJSON();
var marañon_upper_sinuosity_data_layer_1999 = new L.GeoJSON();
var marañon_upper_sinuosity_data_layer_2005 = new L.GeoJSON();
var marañon_upper_sinuosity_data_layer_2011 = new L.GeoJSON();
var marañon_upper_sinuosity_data_layer_2017 = new L.GeoJSON();
var marañon_upper_wavelength_data_layer_1987 = new L.GeoJSON();
var marañon_upper_wavelength_data_layer_1993 = new L.GeoJSON();
var marañon_upper_wavelength_data_layer_1999 = new L.GeoJSON();
var marañon_upper_wavelength_data_layer_2005 = new L.GeoJSON();
var marañon_upper_wavelength_data_layer_2011 = new L.GeoJSON();
var marañon_upper_wavelength_data_layer_2017 = new L.GeoJSON();
var marañon_islands_data_layer_1987 = new L.GeoJSON();
var marañon_islands_data_layer_1993 = new L.GeoJSON();
var marañon_islands_data_layer_1999 = new L.GeoJSON();
var marañon_islands_data_layer_2005 = new L.GeoJSON();
var marañon_islands_data_layer_2011 = new L.GeoJSON();
var marañon_islands_data_layer_2017 = new L.GeoJSON();
var marañon_erosion_deposition_NC_data_layer_1993 = new L.GeoJSON();
var marañon_erosion_deposition_D_data_layer_1993 = new L.GeoJSON();
var marañon_erosion_deposition_E_data_layer_1993 = new L.GeoJSON();
var marañon_erosion_deposition_NC_data_layer_1999 = new L.GeoJSON();
var marañon_erosion_deposition_D_data_layer_1999 = new L.GeoJSON();
var marañon_erosion_deposition_E_data_layer_1999 = new L.GeoJSON();
var marañon_erosion_deposition_NC_data_layer_2005 = new L.GeoJSON();
var marañon_erosion_deposition_D_data_layer_2005 = new L.GeoJSON();
var marañon_erosion_deposition_E_data_layer_2005 = new L.GeoJSON();
var marañon_erosion_deposition_NC_data_layer_2011 = new L.GeoJSON();
var marañon_erosion_deposition_D_data_layer_2011 = new L.GeoJSON();
var marañon_erosion_deposition_E_data_layer_2011 = new L.GeoJSON();
var marañon_erosion_deposition_NC_data_layer_2017 = new L.GeoJSON();
var marañon_erosion_deposition_D_data_layer_2017 = new L.GeoJSON();
var marañon_erosion_deposition_E_data_layer_2017 = new L.GeoJSON();
// var marañon_dunes_campaign_1_sections_layer;
// var marañon_dunes_campaign_1_lines_layer;
var marañon_dunes_campaign_2_sections_layer = new L.GeoJSON();
// var marañon_dunes_campaign_2_lines_layer;
var marañon_dunes_campaign_3_sections_layer = new L.GeoJSON();
// var marañon_dunes_campaign_3_lines_layer;
var marañon_bedload_campaign_1_sections_layer = new L.GeoJSON();
var marañon_bedload_campaign_2_sections_layer = new L.GeoJSON();
var marañon_bedload_campaign_3_sections_layer = new L.GeoJSON();


var marañon_upper_confinement_data_layer_1987 = new L.GeoJSON();
var marañon_upper_confinement_data_layer_1993 = new L.GeoJSON();
var marañon_upper_confinement_data_layer_1999 = new L.GeoJSON();
var marañon_upper_confinement_data_layer_2005 = new L.GeoJSON();
var marañon_upper_confinement_data_layer_2011 = new L.GeoJSON();
var marañon_upper_confinement_data_layer_2017 = new L.GeoJSON();

/**
 * Ucayali Layers
 */
var ucayali_disabled_river_data_layer = new L.GeoJSON();
var ucayali_river_outline_data_layer = new L.GeoJSON();
var ucayali_avg_width_data_layer_1989 = new L.GeoJSON();
var ucayali_avg_width_data_layer_1993 = new L.GeoJSON();
var ucayali_avg_width_data_layer_1997 = new L.GeoJSON();
var ucayali_avg_width_data_layer_2001 = new L.GeoJSON();
var ucayali_avg_width_data_layer_2005 = new L.GeoJSON();
var ucayali_avg_width_data_layer_2009 = new L.GeoJSON();
var ucayali_avg_width_data_layer_2013 = new L.GeoJSON();
var ucayali_avg_width_data_layer_2017 = new L.GeoJSON();
var ucayali_sinuosity_data_layer_1989 = new L.GeoJSON();
var ucayali_sinuosity_data_layer_1993 = new L.GeoJSON();
var ucayali_sinuosity_data_layer_1997 = new L.GeoJSON();
var ucayali_sinuosity_data_layer_2001 = new L.GeoJSON();
var ucayali_sinuosity_data_layer_2005 = new L.GeoJSON();
var ucayali_sinuosity_data_layer_2009 = new L.GeoJSON();
var ucayali_sinuosity_data_layer_2013 = new L.GeoJSON();
var ucayali_sinuosity_data_layer_2017 = new L.GeoJSON();
var ucayali_wavelength_data_layer_1989 = new L.GeoJSON();
var ucayali_wavelength_data_layer_1993 = new L.GeoJSON();
var ucayali_wavelength_data_layer_1997 = new L.GeoJSON();
var ucayali_wavelength_data_layer_2001 = new L.GeoJSON();
var ucayali_wavelength_data_layer_2005 = new L.GeoJSON();
var ucayali_wavelength_data_layer_2009 = new L.GeoJSON();
var ucayali_wavelength_data_layer_2013 = new L.GeoJSON();
var ucayali_wavelength_data_layer_2017 = new L.GeoJSON();
var ucayali_upper_avg_width_data_layer_1989 = new L.GeoJSON();
var ucayali_upper_avg_width_data_layer_1993 = new L.GeoJSON();
var ucayali_upper_avg_width_data_layer_1997 = new L.GeoJSON();
var ucayali_upper_avg_width_data_layer_2001 = new L.GeoJSON();
var ucayali_upper_avg_width_data_layer_2005 = new L.GeoJSON();
var ucayali_upper_avg_width_data_layer_2009 = new L.GeoJSON();
var ucayali_upper_avg_width_data_layer_2013 = new L.GeoJSON();
var ucayali_upper_avg_width_data_layer_2017 = new L.GeoJSON();
var ucayali_upper_sinuosity_data_layer_1989 = new L.GeoJSON();
var ucayali_upper_sinuosity_data_layer_1993 = new L.GeoJSON();
var ucayali_upper_sinuosity_data_layer_1997 = new L.GeoJSON();
var ucayali_upper_sinuosity_data_layer_2001 = new L.GeoJSON();
var ucayali_upper_sinuosity_data_layer_2005 = new L.GeoJSON();
var ucayali_upper_sinuosity_data_layer_2009 = new L.GeoJSON();
var ucayali_upper_sinuosity_data_layer_2013 = new L.GeoJSON();
var ucayali_upper_sinuosity_data_layer_2017 = new L.GeoJSON();
var ucayali_upper_wavelength_data_layer_1989 = new L.GeoJSON();
var ucayali_upper_wavelength_data_layer_1993 = new L.GeoJSON();
var ucayali_upper_wavelength_data_layer_1997 = new L.GeoJSON();
var ucayali_upper_wavelength_data_layer_2001 = new L.GeoJSON();
var ucayali_upper_wavelength_data_layer_2005 = new L.GeoJSON();
var ucayali_upper_wavelength_data_layer_2009 = new L.GeoJSON();
var ucayali_upper_wavelength_data_layer_2013 = new L.GeoJSON();
var ucayali_upper_wavelength_data_layer_2017 = new L.GeoJSON();
var ucayali_upper_confinement_data_layer_1989 = new L.GeoJSON();
var ucayali_upper_confinement_data_layer_1993 = new L.GeoJSON();
var ucayali_upper_confinement_data_layer_1997 = new L.GeoJSON();
var ucayali_upper_confinement_data_layer_2001 = new L.GeoJSON();
var ucayali_upper_confinement_data_layer_2005 = new L.GeoJSON();
var ucayali_upper_confinement_data_layer_2009 = new L.GeoJSON();
var ucayali_upper_confinement_data_layer_2013 = new L.GeoJSON();
var ucayali_upper_confinement_data_layer_2017 = new L.GeoJSON();
var ucayali_islands_data_layer_1987 = new L.GeoJSON();
var ucayali_islands_data_layer_1993 = new L.GeoJSON();
var ucayali_islands_data_layer_1999 = new L.GeoJSON();
var ucayali_islands_data_layer_2005 = new L.GeoJSON();
var ucayali_islands_data_layer_2011 = new L.GeoJSON();
var ucayali_islands_data_layer_2017 = new L.GeoJSON();
var ucayali_migration_data_layers;
var ucayali_migration_1987_1989_data_layer = new L.GeoJSON();
var ucayali_migration_1989_1993_data_layer = new L.GeoJSON();
var ucayali_migration_1993_1997_data_layer = new L.GeoJSON();
var ucayali_migration_1997_2001_data_layer = new L.GeoJSON();
var ucayali_migration_2001_2005_data_layer = new L.GeoJSON();
var ucayali_migration_2005_2009_data_layer = new L.GeoJSON();
var ucayali_migration_2009_2013_data_layer = new L.GeoJSON();
var ucayali_migration_2013_2017_data_layer = new L.GeoJSON();
// var ucayali_dunes_campaign_1_sections_layer;
// var ucayali_dunes_campaign_1_lines_layer;
var ucayali_dunes_campaign_2_sections_layer = new L.GeoJSON();
// var ucayali_dunes_campaign_2_lines_layer;
// var ucayali_dunes_campaign_3_sections_layer;
// var ucayali_dunes_campaign_3_lines_layer;
var ucayali_bedload_campaign_1_sections_layer = new L.GeoJSON();
var ucayali_bedload_campaign_2_sections_layer = new L.GeoJSON();
var ucayali_bedload_campaign_3_sections_layer = new L.GeoJSON();


/**
 * Background Data layers
 */


/**
 * Population
 */

var population_department_capital_data_layer = new L.GeoJSON();
var population_department_province_data_layer = new L.GeoJSON();
var population_department_district_data_layer = new L.GeoJSON();
var population_town_data_layer = new L.GeoJSON();

/**
 * Populated Areas
 */

var populated_areas_native_communities_data_layer = new L.GeoJSON();
var populated_areas_rural_communities_data_layer = new L.GeoJSON();

/**
 *Protected Natural Areas
 */

var pna_national_data_layer = new L.GeoJSON();
var pna_regional_data_layer = new L.GeoJSON();
var pna_private_data_layer = new L.GeoJSON();
var pna_buffer_zone_data_layer = new L.GeoJSON();

/**
 * Hidrography
 */

var hidrography_basins_data_layer = new L.GeoJSON();
var hidrography_rivers_data_layer = new L.GeoJSON();
var hidrography_lakes_data_layer = new L.GeoJSON();
var hidrography_glaciers_data_layer = new L.GeoJSON();

/**
 * Transport
 */
var transport_ports_data_layer = new L.GeoJSON();
var transport_airports_data_layer = new L.GeoJSON();

/**
 * Extractive
 */
var extractive_mining_projects_data_layer = new L.GeoJSON();
var extractive_hydrocarbons_data_layer = new L.GeoJSON();

/**
 * Field Measurements Data layers
 * Layers store markers or polygons geoJSON data for field measurements.
 */

/**
 * Water level
 */
var water_level_data_layer = new L.GeoJSON();
var water_level_markers = [];

/**
 * Dunes
 */
var dunes_sections_huallaga_campaign_1_data_layer = new L.GeoJSON();
var dunes_lines_huallaga_campaign_1_data_layer = new L.GeoJSON();
var dunes_section_selected_index = -1;

/**
 * Bedload
 */
var bedload_sections_huallaga_campaign_1_data_layer = new L.GeoJSON();

/**
 * Sediments
 */
var sediments_stations_huallaga_campaign_1_data_layer = new L.GeoJSON();
var sediments_markers = [];
var sediment_button_type_selected = "";
var sediment_feature_UHS_property_selected = "";

/**
 * Background Data layers
 * Data layers for general information common to all projects
 */

/**
 * Districts
 */

var districts_data_layer = new L.GeoJSON();

/**
 * Provinces
 */

var provinces_data_layer = new L.GeoJSON();

/**
 * Departments
 */

var departments_data_layer = new L.GeoJSON();


/**
 * Communities
 */
var communities_data_layer;

/**
 * DEM (Digital Elevation Model)
 */
var dem_overlay_map;

/**
 * Malos Pasos
 */
var malos_pasos_lines_data_layer = new L.GeoJSON();
var malos_pasos_points_data_layer = new L.GeoJSON();

/**
 * River Valley
 */
var rivers_valley_data_layer;

/**
 * LSPIV
 */
var lspiv_data_layer = new L.GeoJSON();
var lspiv_markers = [];

/**
 * TEST Data layers (WORK IN PROGRESS)
 */
var drone_video_animation_data_layer = new L.GeoJSON();
var drone_video_animation_playing = false;

//</editor-fold>



//<editor-fold desc="FUNCTIONS">

/**
 * Initializes an array of data layers (ggogle maps Data object). The input and output arrays must have corresponding elements
 * @param dataLayersArray
 * @returns Same array with layers initialized
 */
function initializeDataLayersLiteral(dataLayersArray) {

    for (var i = 0; i < dataLayersArray.length; i++){dataLayersArray[i] = new google.maps.Data()}

    return dataLayersArray;

}

/**
 * Initializes an array of data layers (ggogle maps Data object). The input and output arrays must have corresponding elements
 * @param dataLayers
 */
function initializeDataLayers(dataLayers) {

    dataLayers.forEach(function (layer) {
        dataLayers[dataLayers.indexOf(layer)] = new L.GeoJSON();
    });

}

/**
 * Function executed after all layers are added to the map. After all the initialization the loader (GIF) is removed
 */

function initMapComplete() {

    south_america_limits_data_layer.setMap(map);
    amazonas_disabled_river_data_layer.setMap(map);
    huallaga_disabled_river_data_layer.setMap(map);
    marañon_disabled_river_data_layer.setMap(map);
    ucayali_disabled_river_data_layer.setMap(map);

    setTimeout(function () {
        removeLoader();
    }, 500);

}

/**
 * Gives geometry the corresponding properties (stroke color, fill color, etc) depending on the polygonProperty parameter. The geometry is not added to the map, must be done manually
 * @param JSON_path: GeoJSON file path in the project (String)
 * @param river_data_layer: Previous initialized data layer (google maps Data object)
 * @param polygonProperty (String)
 * @param clickCallback Event fired when geometry clicked (function)
 * @param mouseoverCallback Event fired when mouse goes over the geometry (function)
 * @param mouseoutCallback Event fired when mouse goes out the geometry (function)
 * @param completionCallback Event fired when geometry properties ares set (function)
 */
function addInteractiveSinglePolygonToMap(JSON_path, river_data_layer, polygonProperty, clickCallback, mouseoverCallback, mouseoutCallback, completionCallback) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addData(json);
        river_data_layer.setStyle(function(feature){

            if(polygonProperty.localeCompare("migration") === 0){
                if(feature.properties.tipo.localeCompare("migration") === 0) return ({'color': colorMapMigration(feature.properties.tipo.migration/1000), 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
                if(feature.properties.tipo.localeCompare("centerline_older") === 0) return ({'color': migration_older_year, 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
                if(feature.properties.tipo.localeCompare("centerline_recent") === 0) return ({'color': migration_recent_year, 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
                if(feature.properties.tipo.localeCompare("change of channel") === 0) return ({'color': migration_channel_change, 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
                if(feature.properties.tipo.localeCompare("cutoff") === 0) return ({'color': migration_cut_off, 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
            }

            if(polygonProperty.localeCompare("dunes_sections") === 0) return ({'color': dunes_section_border_color, 'strokeOpacity': 1.0, 'fillColor': dunes_sections_color, 'fillOpacity': 0.9, 'strokeWeight': 3.0});
            if(polygonProperty.localeCompare("dunes_lines") === 0) return ({'color': dunes_lines_color, 'strokeOpacity': 1.0, 'strokeWeight': 2.0});
            if(polygonProperty.localeCompare("bedload") === 0) return ({'color': '#000000', 'strokeOpacity': 0.8, 'fillColor': bedload_sections_color, 'fillOpacity': 0.9, 'strokeWeight': 1.0});
            if(polygonProperty.localeCompare("av_width") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': colorMapWidth(feature.properties['av_width']/1000), 'fillOpacity': 1.0, 'strokeWeight': 2.0});
            if(polygonProperty.localeCompare("sinuosity") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': colorMapSinuosity(feature.properties['sinuosity']), 'fillOpacity': 1.0, 'strokeWeight': 2.0});
            if(polygonProperty.localeCompare("arcwavelen") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': colorMapWavelength(feature.properties['arcwavelen']/1000), 'fillOpacity': 1.0, 'strokeWeight': 2.0});
            if(polygonProperty.localeCompare("islands") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': islands_fill_color, 'fillOpacity': 1.0, 'strokeWeight': 0.0});
            if(polygonProperty.localeCompare("confinam") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': colorMapConfinement(feature.properties[polygonProperty]), 'fillOpacity': 1.0, 'strokeWeight': 2.0});
            if(polygonProperty.localeCompare("disabled") === 0) return ({'color': '#8c8c8c', 'strokeOpacity': 1.0, 'fillColor': '#d9d9d9', 'fillOpacity': 1.0, 'strokeWeight': 2.0});
            if(polygonProperty.localeCompare("limits") === 0) return ({'color': '#000000', 'strokeOpacity': 0.5, 'fillColor': '#CCCCCC', 'fillOpacity': 0.45, 'strokeWeight': 0.5});
            if(polygonProperty.localeCompare("communities") === 0) return ({'color': '#000000', 'strokeOpacity': 0.5, 'fillColor': '#0000FF', 'fillOpacity': 0.5, 'strokeWeight': 2.0});
            // if(polygonProperty.localeCompare("malos_pasos") === 0) return {icon: "img/marker-icons/rojo.png", title: feature.getProperty("NOMBRE")};
            // if(polygonProperty.localeCompare("malos_pasos_lineas") === 0) return {strokeColor: "#000000", strokeOpacity: 1.0, strokeWeight: 3.0};
            if(polygonProperty.localeCompare("rivers_valley") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': '#00FF00', 'fillOpacity': 0.9, 'strokeWeight': 1.0});
            if(polygonProperty.localeCompare("drone_animation") === 0) return ({'color': drone_animation_color, 'strokeOpacity': 1.0, 'strokeWeight': 2.0});
            if(polygonProperty.localeCompare("test") === 0) return ({'color': "#000000", 'strokeOpacity': 0.2, 'fillColor': "#000000", 'fillOpacity': 0.2, 'strokeWeight': 0.5});

        });

        river_data_layer.eachLayer(function (layer) {

            layer.on('click', function (event) { if(clickCallback !== null) clickCallback(event) });

            layer.on('mouseover', function () { if(mouseoverCallback !== null) mouseoverCallback(this) });

            layer.on('mouseout', function () { if(mouseoutCallback !== null) mouseoutCallback(this, river_data_layer) });

        });

    }).done(function () {
        if(completionCallback !== null) completionCallback();
    });

    // $.ajax({
    //     url: JSON_path,
    //     headers: {  'Access-Control-Allow-Origin': '*' }
    // }).done(function (json) {
    //
    //     river_data_layer.addData(json);
    //     river_data_layer.setStyle(function(feature){
    //
    //         if(polygonProperty.localeCompare("migration") === 0){
    //             if(feature.properties.tipo.localeCompare("migration") === 0) return ({'color': colorMapMigration(feature.properties.tipo.migration/1000), 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
    //             if(feature.properties.tipo.localeCompare("centerline_older") === 0) return ({'color': migration_older_year, 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
    //             if(feature.properties.tipo.localeCompare("centerline_recent") === 0) return ({'color': migration_recent_year, 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
    //             if(feature.properties.tipo.localeCompare("change of channel") === 0) return ({'color': migration_channel_change, 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
    //             if(feature.properties.tipo.localeCompare("cutoff") === 0) return ({'color': migration_cut_off, 'strokeOpacity': 1.0, 'strokeWeight': 3.0});
    //         }
    //
    //         if(polygonProperty.localeCompare("dunes_sections") === 0) return ({'color': dunes_section_border_color, 'strokeOpacity': 1.0, 'fillColor': dunes_sections_color, 'fillOpacity': 0.9, 'strokeWeight': 3.0});
    //         if(polygonProperty.localeCompare("dunes_lines") === 0) return ({'color': dunes_lines_color, 'strokeOpacity': 1.0, 'strokeWeight': 2.0});
    //         if(polygonProperty.localeCompare("bedload") === 0) return ({'color': '#000000', 'strokeOpacity': 0.8, 'fillColor': bedload_sections_color, 'fillOpacity': 0.9, 'strokeWeight': 1.0});
    //         if(polygonProperty.localeCompare("av_width") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': colorMapWidth(feature.properties['av_width']/1000), 'fillOpacity': 1.0, 'strokeWeight': 2.0});
    //         if(polygonProperty.localeCompare("sinuosity") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': colorMapSinuosity(feature.properties['sinuosity']), 'fillOpacity': 1.0, 'strokeWeight': 2.0});
    //         if(polygonProperty.localeCompare("arcwavelen") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': colorMapWavelength(feature.properties['arcwavelen']/1000), 'fillOpacity': 1.0, 'strokeWeight': 2.0});
    //         if(polygonProperty.localeCompare("islands") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': islands_fill_color, 'fillOpacity': 1.0, 'strokeWeight': 0.0});
    //         if(polygonProperty.localeCompare("confinam") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': colorMapConfinement(feature.properties[polygonProperty]), 'fillOpacity': 1.0, 'strokeWeight': 2.0});
    //         if(polygonProperty.localeCompare("disabled") === 0) return ({'color': '#8c8c8c', 'strokeOpacity': 1.0, 'fillColor': '#d9d9d9', 'fillOpacity': 1.0, 'strokeWeight': 2.0});
    //         if(polygonProperty.localeCompare("limits") === 0) return ({'color': '#000000', 'strokeOpacity': 0.5, 'fillColor': '#CCCCCC', 'fillOpacity': 0.45, 'strokeWeight': 0.5});
    //         if(polygonProperty.localeCompare("communities") === 0) return ({'color': '#000000', 'strokeOpacity': 0.5, 'fillColor': '#0000FF', 'fillOpacity': 0.5, 'strokeWeight': 2.0});
    //         // if(polygonProperty.localeCompare("malos_pasos") === 0) return {icon: "img/marker-icons/rojo.png", title: feature.getProperty("NOMBRE")};
    //         // if(polygonProperty.localeCompare("malos_pasos_lineas") === 0) return {strokeColor: "#000000", strokeOpacity: 1.0, strokeWeight: 3.0};
    //         if(polygonProperty.localeCompare("rivers_valley") === 0) return ({'color': '#000000', 'strokeOpacity': 1.0, 'fillColor': '#00FF00', 'fillOpacity': 0.9, 'strokeWeight': 1.0});
    //         if(polygonProperty.localeCompare("drone_animation") === 0) return ({'color': drone_animation_color, 'strokeOpacity': 1.0, 'strokeWeight': 2.0});
    //         if(polygonProperty.localeCompare("test") === 0) return ({'color': "#000000", 'strokeOpacity': 0.2, 'fillColor': "#000000", 'fillOpacity': 0.2, 'strokeWeight': 0.5});
    //
    //     });
    //
    //     river_data_layer.eachLayer(function (layer) {
    //
    //         layer.on('click', function (event) { if(clickCallback !== null) clickCallback(event) });
    //
    //         layer.on('mouseover', function () { if(mouseoverCallback !== null) mouseoverCallback(this) });
    //
    //         layer.on('mouseout', function () { if(mouseoutCallback !== null) mouseoutCallback(this, river_data_layer) });
    //
    //     });
    //
    //     if(completionCallback !== null) completionCallback();
    //
    // })

}

/**
 * Gives geometry the corresponding properties (stroke color, fill color, etc) depending on the polygonProperty parameter and adds the geometry to the map
 * This function is used when the geometry to add does not require interactiveness otherwise use the addInteractiveSinglePolygonToMap function
 * @param JSON_path
 * @param markerIconPath
 * @param layer_type
 * @param river_data_layer
 * @param styleOptions
 * @param strokeColor
 * @param strokeOpacity
 * @param fillColor
 * @param fillOpacity
 * @param completionCallback
 */
function addSinglePolygonToMap(JSON_path, markerIconPath, layer_type, river_data_layer, styleOptions, completionCallback) {

    $.getJSON(JSON_path, function (json) {

        river_data_layer.addData(json);

        if(layer_type.localeCompare("polygon") === 0){
            // river_data_layer.setStyle({ color: strokeColor, opacity: strokeOpacity, fillColor: fillColor, fillOpacity: fillOpacity, weight: strokeWeight});
            river_data_layer.setStyle(styleOptions);
        }else if(layer_type.localeCompare("marker") === 0){
            river_data_layer.eachLayer(function (layer) {
                layer.setIcon(L.icon({iconUrl: markerIconPath}));
                L.setOptions(layer, {title: layer.feature.properties["NOMBRE"]});
            });
        }

        river_data_layer.addTo(map);

    }).done(function () {
        if(completionCallback !== null) completionCallback();
    });

}


function addDisabledRivers() {



    // addInteractiveSinglePolygonToMap("data/disabled-rivers/Amazonas/amazonas_test_small.json", amazonas_disabled_river_data_layer, "disabled", null, null, null, null);
    // addInteractiveSinglePolygonToMap("data/disabled-rivers/Huallaga/huallaga_test_small.json", huallaga_disabled_river_data_layer, "disabled", null, null, null, null);
    // addInteractiveSinglePolygonToMap("data/disabled-rivers/Marañon/marañon_test_small.json", marañon_disabled_river_data_layer, "disabled", null, null, null, null);
    // addInteractiveSinglePolygonToMap("data/disabled-rivers/Ucayali/ucayali_test_small.json", ucayali_disabled_river_data_layer, "disabled", null, null, null, function () {
    //
    //
    //
    //     amazonas_disabled_river_data_layer.addTo(map);
    //     huallaga_disabled_river_data_layer.addTo(map);
    //     marañon_disabled_river_data_layer.addTo(map);
    //     ucayali_disabled_river_data_layer.addTo(map);
    //
    // });

    addInteractiveSinglePolygonToMap("https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/Disabled_rivers/amazonas_disabled_river.json", amazonas_disabled_river_data_layer, "disabled", null, null, null, null);
    addInteractiveSinglePolygonToMap("https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/Disabled_rivers/huallaga_disabled_river.json", huallaga_disabled_river_data_layer, "disabled", null, null, null, null);
    addInteractiveSinglePolygonToMap("https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/Disabled_rivers/marañon_disabled_river.json", marañon_disabled_river_data_layer, "disabled", null, null, null, null);
    addInteractiveSinglePolygonToMap("https://citavisualizador.s3-us-west-1.amazonaws.com/json/Project+Data/Disabled_rivers/ucayali_disabled_river.json", ucayali_disabled_river_data_layer, "disabled", null, null, null, function () {

        amazonas_disabled_river_data_layer.addTo(map);
        huallaga_disabled_river_data_layer.addTo(map);
        marañon_disabled_river_data_layer.addTo(map);
        ucayali_disabled_river_data_layer.addTo(map);
        hideSplashOverlay();

    });

}

/**
 * Removes disabled polygons (dark river outlines) from the map
 */
function removeDisabledRiverPolygons() {

    amazonas_disabled_river_data_layer.remove();
    huallaga_disabled_river_data_layer.remove();
    marañon_disabled_river_data_layer.remove();
    ucayali_disabled_river_data_layer.remove();

}

/**
 * Adds the previous removed polygon (the sequence starts when selecting rivers)
 */
function addLastRemovedPolygon() {

    
    if(last_disabled_river_removed !== -1){

        if(last_disabled_river_removed === 0){
            amazonas_disabled_river_data_layer.addTo(map);
        }else if(last_disabled_river_removed === 1){
            huallaga_disabled_river_data_layer.addTo(map);
        }else if(last_disabled_river_removed === 2){
            marañon_disabled_river_data_layer.addTo(map);
        }else if((last_disabled_river_removed === 3)){
            ucayali_disabled_river_data_layer.addTo(map);
        }

    }

}

/**
 * Removes the disabled polygon for the current selected river leaving the other ones as disabled
 */
function removeCurrentDisabledRiver() {

    if(activeRiverIndex === 0){
        amazonas_disabled_river_data_layer.remove();
    }else if(activeRiverIndex === 1){
        huallaga_disabled_river_data_layer.remove();
    }else if(activeRiverIndex === 2){
        marañon_disabled_river_data_layer.remove();
    }else if((activeRiverIndex === 3)){
        ucayali_disabled_river_data_layer.remove();
    }

}

/**
 * Toggles the visibility of a single data layer in an array of data layers (this function is used when the year progress bar is active)
 * @param dataLayerArray
 * @param dataLayerIndex
 */
function toggleDataLayerVisibility(dataLayerArray, dataLayerIndex) {

    dataLayerArray.forEach(function (layer) {

        if(dataLayerArray.indexOf(layer) !== dataLayerIndex) layer.remove();
        if(dataLayerArray.indexOf(layer) === dataLayerIndex) layer.addTo(map);

    })

}

/**
 * Sets all data layers visibility to null (data layers included in an array)
 * @param dataLayerArray
 */
function disableDataLayerVisibility(dataLayerArray) {

    dataLayerArray.forEach(function (layer) {
        layer.remove();
    })

}



/**
 * Removes erosion-deposition (for the available rivers) data layers from the map
 */
function clearRiverErosionDepositionLayers() {

    var currentRiverLayers = [0, 2];

    for (var i = 0; i < currentRiverLayers.length; i++){

        var riverLayerIndex = currentRiverLayers[i];

        rivers_erosion_deposition_JSON[riverLayerIndex].river_data_NC_layer.forEach(function (layer) {
            rivers_erosion_deposition_JSON[riverLayerIndex].river_data_NC_layer[rivers_erosion_deposition_JSON[riverLayerIndex].river_data_NC_layer.indexOf(layer)].remove();
        });
        rivers_erosion_deposition_JSON[riverLayerIndex].river_data_E_layer.forEach(function (layer) {
            rivers_erosion_deposition_JSON[riverLayerIndex].river_data_E_layer[rivers_erosion_deposition_JSON[riverLayerIndex].river_data_E_layer.indexOf(layer)].remove();
        });
        rivers_erosion_deposition_JSON[riverLayerIndex].river_data_D_layer.forEach(function (layer) {
            rivers_erosion_deposition_JSON[riverLayerIndex].river_data_D_layer[rivers_erosion_deposition_JSON[riverLayerIndex].river_data_D_layer.indexOf(layer)].remove();
        });

    }

}

/**
 * Removes river outlines data layers from the map
 */
function removeRiverOutlines() {

    // amazonas_river_outline_data_layer.setMap(null);
    // huallaga_river_outline_data_layer.setMap(null);
    // marañon_river_outline_data_layer.setMap(null);
    // ucayali_river_outline_data_layer.setMap(null);

    amazonas_river_outline_data_layer.remove();
    huallaga_river_outline_data_layer.remove();
    marañon_river_outline_data_layer.remove();
    ucayali_river_outline_data_layer.remove();

}

/**
 * Removes available (for now) background data layers
 */
function clearBackgroundData() {

    //Clear DEM layer
    map.overlayMapTypes.removeAt(0);
    hideElements(["morphometrics-legend-container"]);
    document.getElementById("dem_menu_button_icon_id").src = "img/side-bar-icon/elevation_icon.png";
    document.getElementById("dem_menu_option_title_id").style.color = "white";
    dem_enabled = false;

    //Clear malos pasos layer
    document.getElementById("malos_pasos_menu_button_icon_id").src = "img/side-bar-icon/malos_pasos_icon.png";
    document.getElementById("malos_pasos_menu_option_title_id").style.color = "white";
    malos_pasos_points_data_layer.setMap(null);
    malos_pasos_lines_data_layer.setMap(null);
    fires_enabled = false;

}

/**
 * Removes all data layers from the map (cita and background data layers)
 */
function clearMap(){

    UHDMarkerIndexTop = -1;
    UHDMarkerIndexBottom = -1;
    document.getElementById("dropdownMenuButtonBottom").innerHTML = $.i18n( 'dropdown-uhd-default-option' );
    document.getElementById("UHD-bottom-card-image").src = "";

    removeRiverOutlines();
    removeMarkersFromMap(UHDHuallagaMarkers);
    removeMarkersFromMap(droneFlightsMarkersArray);
    removeElementChildNodesWithClass("dropdown-item");
    removeElementChildNodesWithClass("field-measurement-campaign-indicator");
    fadeOutElements(["UHD-top-card-container", "UHD-bottom-card-container"], 350);
    fadeOutElements(["drone-flights-marker-click-container", "morphometrics-legend-container", "extra-legend-container", "background-legend-container", "water-level-card-container", "dunes-card-container", "bedload-card-container", "sediments-card-container"], 350);
    fadeOutElements(["progress-bar-container"], 350);

    if(!river_submenu_clicked){
        fadeOutElements(["selected-river-description"], 350);
    }else{
        river_submenu_clicked = false;
    }

    if(erosion_deposition_layers_added) clearRiverErosionDepositionLayers();

    if(morphometric_layers_added){

        disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_width_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_sinuosity_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_wavelength_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_islands_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[0].river_width_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[0].river_sinuosity_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[0].river_wavelength_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[0].river_confinement_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_width_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_sinuosity_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_wavelength_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[1].river_width_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[1].river_sinuosity_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[1].river_wavelength_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[1].river_confinement_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_islands_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_width_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_sinuosity_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_wavelength_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[2].river_width_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[2].river_sinuosity_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[2].river_wavelength_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[2].river_confinement_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_islands_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_width_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_sinuosity_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_wavelength_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[3].river_width_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[3].river_sinuosity_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[3].river_wavelength_layer);
        disableDataLayerVisibility(upper_rivers_morphometrics_JSON[3].river_confinement_layer);
        disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_islands_layer);


    }

    if(migration_layers_added){

        disableDataLayerVisibility(huallaga_migration_data_layers);
        disableDataLayerVisibility(ucayali_migration_data_layers);

    }

    disableDataLayerVisibility([water_level_data_layer]);






    // disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_width_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_sinuosity_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_wavelength_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[0].river_islands_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[0].river_width_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[0].river_sinuosity_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[0].river_wavelength_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_width_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_sinuosity_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_wavelength_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[1].river_width_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[1].river_sinuosity_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[1].river_wavelength_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[1].river_islands_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_width_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_sinuosity_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_wavelength_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[2].river_width_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[2].river_sinuosity_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[2].river_wavelength_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[2].river_islands_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_width_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_sinuosity_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_wavelength_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[3].river_width_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[3].river_sinuosity_layer);
    // disableDataLayerVisibility(upper_rivers_morphometrics_JSON[3].river_wavelength_layer);
    // disableDataLayerVisibility(rivers_morphometrics_JSON[3].river_islands_layer);
    // disableDataLayerVisibility(rivers_dunes_JSON[0].campaign_1_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[0].campaign_2_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[0].campaign_3_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[1].campaign_1_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[1].campaign_2_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[1].campaign_3_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[2].campaign_1_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[2].campaign_2_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[2].campaign_3_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[3].campaign_1_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[3].campaign_2_layers);
    // disableDataLayerVisibility(rivers_dunes_JSON[3].campaign_3_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[0].campaign_1_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[0].campaign_2_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[0].campaign_3_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[1].campaign_1_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[1].campaign_2_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[1].campaign_3_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[2].campaign_1_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[2].campaign_2_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[2].campaign_3_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[3].campaign_1_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[3].campaign_2_layers);
    // disableDataLayerVisibility(rivers_bedload_JSON[3].campaign_3_layers);
    // disableDataLayerVisibility([lspiv_data_layer, water_level_data_layer, dunes_sections_huallaga_campaign_1_data_layer, dunes_lines_huallaga_campaign_1_data_layer]);
    // disableDataLayerVisibility([bedload_sections_huallaga_campaign_1_data_layer, sediments_stations_huallaga_campaign_1_data_layer]);
    // disableDataLayerVisibility(huallaga_migration_data_layers);
    // disableDataLayerVisibility(ucayali_migration_data_layers);

}

/**
 * Gives geometry the corresponding properties (stroke color, fill color, etc) depending on the polygonProperty parameter and adds the geometry to the map
 * This function is used when the geometry to add does not require interactiveness otherwise use the addInteractiveSinglePolygonToMap function
 * @param JSON_path
 * @param river_data_layer
 * @param strokeColor
 * @param strokeOpacity
 * @param strokeWeight
 * @param fillColor
 * @param fillOpacity
 * @param doneFunction
 */
function loadJSONData(JSON_path, river_data_layer, strokeColor, strokeOpacity, strokeWeight, fillColor, fillOpacity, doneFunction) {

    $.getJSON(JSON_path, function (json) {

        // river_data_layer.addGeoJson(json);
        river_data_layer.addData(json);
        river_data_layer.setStyle(function(feature) {
            return {
                color: strokeColor,
                opacity: strokeOpacity,
                weight: strokeWeight,
                fillColor: fillColor,
                fillOpacity: fillOpacity
            }
        });

    }).done(function () {
        if(doneFunction != null) doneFunction();
    })

}



//</editor-fold>
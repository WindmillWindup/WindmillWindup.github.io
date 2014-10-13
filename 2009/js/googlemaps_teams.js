   
    var map;
    var geoXml; 
    var toggleState = 1;

  if (GBrowserIsCompatible()) {
	//geoXml = new GGeoXml("http://www.windmillwindup.com/2009/teams.kml");
	geoXml = new GGeoXml("http://maps.google.com/maps/ms?ie=UTF8&hl=en&msa=0&output=georss&msid=115074587322780454331.000463bdaa093478569c1");
	map = new GMap2(document.getElementById("googlemaps_teams")); 
	map.setCenter(new GLatLng(52.380195,4.788011), 4);		//amsterdam - sportpark eendracht 
	//map.setCenter(new GLatLng(41.875696,-87.624207), 11);
	map.addControl(new GLargeMapControl());
	map.addControl(new GLargeMapControl());
	map.addOverlay(geoXml);
  }

// parameters
param = {};

// bounding box column offsets
param.cxOffset = 6;
param.cyOffset = 5;
param.maxxOffset = 2;
param.minxOffset = 4;
param.maxyOffset = 1;
param.minyOffset = 3;

// animation durations, delays
param.enteringDelta = 0.5;
param.enteringDuration = 1300;
param.literalZoomDuration = 300;
param.oldRemovalDelay = 100;

// zoom scale factor
param.zoomScaleFactor = 4;

// entering initial scale factor
param.enteringScaleFactor = 2.5;

// threshold for t when fade starts
param.fadeThreshold = 0.5;

// tile entering animation duration
param.tileEnteringDuration = 150;

// axes & static trim fading in/out duration
param.axesOutDuration = 400;
param.axesInDuration = 400;
param.staticTrimInDuration = 500;
param.staticTrimOutDuration = 500;
param.popoverOutDuration = 200;

// extra tiles per dimension
param.extraTiles = 0;

// padding for the container svg
param.containerPadding = 50;

// whether retain size when literal zooming
param.retainSizeZoom = false;

// jump types
param.semanticZoom = "semantic_zoom";
param.geometricSemanticZoom = "geometric_semantic_zoom";

// fetching scheme -- either tiling or dbox
param.fetchingScheme = "dbox";

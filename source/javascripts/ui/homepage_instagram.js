///////////////////////////////////////////////////
// UI: Homepage - Instagram
//
// Pull in all photos tagged with a certain hashtag
///////////////////////////////////////////////////

var instagramTemplate = '<a href="#" data-instagram_type={{model.type}}><img src="{{image}}" /></a>'

$(document).ready(function() {

  //Initialize Instafeed.js on load
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'video',
    clientId: '20c5389504fc402d983e5685b859d6ba',
    template: instagramTemplate,
    resolution: 'standard_resolution',
  });
  feed.run();

  // Set a refresh of Instafeed every minute
  var instafeedRefreshTimer = setInterval(RefreshTimer, 60000);
  function RefreshTimer() {
    feed.run();
    scrollTop: $("#instafeed").offset().top
  }

});

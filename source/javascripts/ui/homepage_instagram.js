///////////////////////////////////////////////////
// UI: Homepage - Instagram
//
// Pull in all photos tagged with a certain hashtag
///////////////////////////////////////////////////

$(document).ready(function() {

  //Initialize Instafeed.js on load
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'video',
    clientId: '20c5389504fc402d983e5685b859d6ba',
    template: '<a class="animation" href="{{link}}"><img src="{{image}}" /></a><div>{{model.type}}</div>'
  });
  feed.run();

  // Set a refresh of Instafeed every minute
  var instafeedRefreshTimer = setInterval(RefreshTimer, 60000);
  function RefreshTimer() {
    feed.run();
    scrollTop: $("#instafeed").offset().top
  }

});

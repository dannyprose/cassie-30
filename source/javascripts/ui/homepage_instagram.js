///////////////////////////////////////////////////
// UI: Homepage - Instagram
//
// Pull in all photos tagged with a certain hashtag
///////////////////////////////////////////////////

function createPhotoElement(photo) {
      var innerHtml = $('<img>')
        .addClass('instagram-image')
        .attr('src', photo.images.thumbnail.url);

      innerHtml = $('<a>')
        .attr('target', '_blank')
        .attr('href', photo.link)
        .append(innerHtml);

      return $('<div>')
        .addClass('instagram-placeholder')
        .attr('id', photo.id)
        .append(innerHtml);
    }

function didLoadInstagram(event, response) {
      var that = this;

      $.each(response.data, function(i, photo) {
        $(that).append(createPhotoElement(photo));
      });
    }

$(document).ready(function() {
  var clientId = '20c5389504fc402d983e5685b859d6ba';

  $('#instagram').on('didLoadInstagram', didLoadInstagram);
        $('#instagram').instagram({
          hash: 'video',
          count: 50,
          clientId: clientId
        });

  // Set a refresh of Instafeed every minute
  //var instafeedRefreshTimer = setInterval(RefreshTimer, 60000);
  //function RefreshTimer() {
  //  feed.run();
  //  scrollTop: $("#instafeed").offset().top
  //}

});

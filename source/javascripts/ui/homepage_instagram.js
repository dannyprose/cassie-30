///////////////////////////////////////////////////
// UI: Homepage - Instagram
//
// Pull in all photos tagged with a certain hashtag
///////////////////////////////////////////////////

var instagramTemplate = '<a class="instagram_photo" data-instagram-type={{model.type}} data-insagram-id={{id}} data-instagram-video-src="{{model.videos.standard_resolution.url}}" data-instagram-video-thumbnail="{{model.images.standard_resolution.url}}"><img class="instagram_photo_media" src="{{image}}" /></a><div class="instagram_photo_meta"><div class="instagram_photo_meta_caption">{{caption}}</div><div class="instagram_photo_meta_social"><div class="instagram_photo_user"><a href="http://www.instagram.com/{{model.user.username}}/"><img class="profile_picture" src="{{model.user.profile_picture}}"/>{{model.user.username}}</a></div><div class="instagram_photo_comments"><a href="{{link}}">{{comments}}</a></div><div class="instagram_photo_likes"><a href="{{link}}">{{likes}}</a></div></div></div>'

$(document).ready(function() {

  //Initialize Instafeed.js on load
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'video',
    clientId: '20c5389504fc402d983e5685b859d6ba',
    template: instagramTemplate,
    resolution: 'standard_resolution',
    after: function(){

      //alert("Done!");

      // Setup Videos
      $('.instagram_photo[data-instagram-type="video"]').each(function(){
        var videoId = $(this).attr("data-insagram-id");
        var videoSource = $(this).attr("data-instagram-video-src");
        var videoPoster = $(this).attr("data-instagram-video-thumbnail");
        console.log(videoId);

        var videoPlayer = '<video id="video_' + videoId + '" class="video-js vjs-default-skin vjs-big-play-centered" controls height="640" width="640" preload="auto" poster="' + videoPoster + '"data-setup="{"example_option":true}"><source src="' + videoSource + '" type="video/mp4" /></video>';

        $(this).html(videoPlayer);

        videojs('#video_' + videoId, {}, function(){
          // Player (this) is initialized and ready.
        });

      });

    }
  });
  feed.run();

  // Set a refresh of Instafeed every minute
  var instafeedRefreshTimer = setInterval(RefreshTimer, 60000);
  function RefreshTimer() {
    feed.run();
    scrollTop: $("#instafeed").offset().top
  }

});

$(document).ready(function(){
  // Initialise fitvids.js
  $('#video').fitVids();

  // Creates a hide/show button for code snippets
  $('pre code').hide();
  $('pre').prepend('<a href="#" class="hide-show">Hide/Show Code</a>\n')
  $('pre .hide-show').click(function(e){
    e.preventDefault();
    $('code', $(this).parent()).toggle('slow');
  });

  // Shows recently played last.fm tracks at the bottom of the page
  $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=tominated&api_key=fe46d430f32227f35b13a1403e423508&limit=6&format=json&callback=?")
  .done(function(data) {
    var tracks = data.recenttracks.track.slice(0, 6).map(function(item) {
      var title = item.artist['#text'] + " - " + item.name;

      var $img = $('<img>')
        .attr('src', item.image[3]['#text'] || "/img/no-cover.png")
        .attr('title', title)
        .attr('alt', title);

      var $a = $('<a>')
        .attr('href', item.url)
        .attr('target', '_blank')
        .addClass('img')
        .append($img);

      return $('<li>').append($a);
    });

    var $ul = $('<ul>').append(tracks);

    $('#content').append('<section id="lastfm"><header><h2>What I\'m listening to</h2><h3>Powered by <a href="http://last.fm/" target="_blank">last.fm</a></h3></header></section>');
    $('#lastfm').append($ul).append('<div class="clear"></div>');
  });
});

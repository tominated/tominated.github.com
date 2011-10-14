$(document).ready(function(){
  
  // Creates a hide/show button for code snippets
  $('pre code').hide();
  $('pre').prepend('<a href="#" class="hide-show">Hide/Show Code</a>\n')
  $('pre .hide-show').click(function(e){
    e.preventDefault();
    $('code', $(this).parent()).toggle('slow');
  });

  // Shows recently played last.fm tracks at the bottom of the page
  $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=tominated&api_key=fe46d430f32227f35b13a1403e423508&limit=5&format=json&callback=?", function(data) {
    var html = '<ul>';
    $.each(data.recenttracks.track, function(i,item){
      if (i < 5) {
        html += "<li><a href='" + item.url + "' class='img' target='_blank'><img src='" + ((item.image[3]['#text'] !== "") ? item.image[3]['#text'] : "/img/no-cover.png") + "' title='" + item.artist['#text'] + " - " + item.name + "' alt='"  + item.artist['#text'] + " - " + item.name + "'/></a></li>"; 
      }   
    });
    html += '</ul>'
    $('#content').append('<section id="lastfm"><header><h2>What I\'m listening to</h2><h3>Powered by <a href="http://last.fm/" target="_blank">last.fm</a></h3></header></section>')
    $('#lastfm').append(html).append('<div class="clear"></div>');
  });
  
});
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('time').each(function() {
    var time_tag = $(this);
    var time_str = time_tag.text();
    time_tag.text(moment(time_str).fromNow());
  });
  $('.navbar-nav a').click(function(event) {
    var link = $(this);
    var url = link.attr('href');
    if (url.indexOf('#') !== 0) { // Not an anchor tag
      return true;
    }
    event.preventDefault();
    var y_offset = $(url).offset().top - $('.navbar-fixed-top').height();
    $('html, body').animate({scrollTop: y_offset}, 500, function() {
      window.location.hash = url;
    });
    return false;
  });
});

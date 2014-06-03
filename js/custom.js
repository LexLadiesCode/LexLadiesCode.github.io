$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
  $('time').each(function() {
    var time_tag = $(this);
    var time_str = time_tag.text();
    time_tag.text(moment(time_str).fromNow());
  });
  $('a[href^=#]').click(function(event) {
    var link = $(this);
    var url = link.attr('href');
    event.preventDefault();
    var area_to_scroll_to = $(url);
    if (area_to_scroll_to.length < 1) {
      var name = url.substr(1); // #top-of-page => top-of-page
      area_to_scroll_to = $('[name="' + name + '"]');
    }
    var y_offset = area_to_scroll_to.offset().top -
                   $('.navbar-fixed-top').height();
    $('html, body').animate({scrollTop: y_offset}, 500, function() {
      if (url === '#top-of-page') {
        window.location.hash = '';
      } else {
        window.location.hash = url;
      }
    });
    return false;
  });
});

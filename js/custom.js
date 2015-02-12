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
  $('a[href^="/index.html#"]').click(function(event) {
    var link = $(this);
    var url = link.attr('href').replace(/^\/index.html/, '');
    if (window.location.href.indexOf('/members') > -1) {
      return true;
    }
    event.preventDefault();
    var area_to_scroll_to = $(url);
    var y_offset = area_to_scroll_to.offset().top -
                   ($('.navbar-fixed-top').height() / 2);
    $('html, body').animate({scrollTop: y_offset}, 500, function() {
      if (url === '#top-of-page') {
        window.location.hash = '';
      } else {
        window.location.hash = url;
      }
    });
    if (link.parents('.navbar-fixed-top').length > 0) {
      link.closest('ul.nav').children('li.active').removeClass('active');
      link.closest('li').addClass('active');
    }
    return false;
  });
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('time').each(function() {
    var time_tag = $(this);
    var time_str = time_tag.text();
    time_tag.text(moment(time_str).fromNow());
  });
});

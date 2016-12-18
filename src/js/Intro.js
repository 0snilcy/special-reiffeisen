var Intro = (function() {
  var btnStart = $('[data-btn=start]'),
      prev = $('.specraif__prev'),
      parent = $('.specraif'),
      prevActive = 'specraif--prev';

  return {
    init: function() {
      prev.show();
      parent.addClass(prevActive);

      btnStart.on('click', function(event) {
        event.preventDefault();
        $('.' + prevActive).removeClass(prevActive);
        prev.hide();
      });
    }
  };
})();

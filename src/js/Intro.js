var btnStart = $('[data-btn=start]'),
    prev = $('.specraif__prev'),
    parent = $('.specraif'),
    prevActive = 'specraif--prev';

module.exports = {
  show: function() {
    prev.show();
    parent.addClass(prevActive);

    btnStart.on('click', function(event) {
      event.preventDefault();
      $('.' + prevActive).removeClass(prevActive);
      prev.hide();
    });
  },
  hide: function() {
    $('.' + prevActive).removeClass(prevActive);
    prev.hide();
  }
};




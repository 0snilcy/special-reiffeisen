var hash = require('./hash');
var intro = require('./intro');
var question = require('./question');
var result = require('./result');

$('.specraif__list').each(function(index, el) {
  var items = $(this).find('.specraif__label');

  function random(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  $(items.eq(random(0, items.length - 1))).prependTo($(this));
});

var thishash = hash();

if (thishash) {
  result(thishash);
} else {
  intro.show();
  question.init();

  $(window).bind('hashchange', function() {
    if (hash()) {
      question.hideItem();
      intro.hide();
      result(hash());
    }
  });
}

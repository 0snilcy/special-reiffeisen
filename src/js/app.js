var App = (function(){
  $('.specraif__list').each(function(index, el) {
    var items = $(this).find('.specraif__label');

    function random(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }

    $(items.eq(random(0, items.length - 1))).prependTo($(this));
  });

  return {
    init: function() {
      var hash = Hash.init();
      if (hash) {
        Result.init(hash);
      } else {
        Intro.init();
        Question.init();
      }
    }
  };
})();


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


var Hash = (function() {
  var hash = /result-[0-5]/i.test(location.hash);

  return {
    init: function() {
      return hash ? location.hash.match( /\d/i )[0] : false;
    }
  };
})();

var Intro = (function() {
  var btnStart = $('[data-btn=start]');
  var prev = $('.specraif__prev');
  var parent = $('.specraif');
  var prevActive = 'specraif--prev';

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

var Question = (function() {
  var questions = $('.specraif__item');
  var questionsData = $('.specraif__data');
  var label = $('.specraif__label');
  var labelActive = 'specraif__label--clicked';
  var correct = '[data-status="correct"]';
  var input = $('input[type=radio]');
  var btnNext = $('[data-btn=next]');
  var mobile = 768;
  var count = 0;
  var result = 0;
  var elem;

  return {
    init: function() {
      var init = this;

      this.showItem(count);

      label.on('click', function(event) {
        var _this = $(this);

        if (!_this.hasClass(labelActive)) {
          _this.addClass(labelActive);
          _this.siblings().off().find(input).prop('disabled', true);

          if (_this.find(correct).length) result++;

          elem = '[data-id=' + _this.find('input').attr('id') + ']';
          $(elem).show();
          btnNext.show();

          if ($(window).width() > mobile) {
            questionsData.eq(count).hide();
          } else {
            $(elem).insertAfter(_this);
          }
        }
      });

      $(btnNext).on('click', function(event) {
        event.preventDefault();
        btnNext.hide();
        $(elem).hide();
        init.hideItem(count);
        count++;

        if (questions.eq(count).length) {
          init.showItem(count);
        } else {
          location.hash = "result-" + result;
          Result.init(result);
        }
      });
    },
    showItem: function(index) {
      questions.eq(index).show();
      questionsData.eq(index).show();
    },
    hideItem: function(index) {
      questions.eq(index).hide();
      questionsData.eq(index).hide();
    },
    value: this.reslut
  };
})();

var Result = (function() {
  var resultData = $('.specraif__result');
  var resultGraph = $('.specraif__bat');
  var titleValue = $('.specraif__title-value');
  var titleText = $('.specraif__title-text');
  var battery = [
    null,
    "specraif__bat-inner--1",
    "specraif__bat-inner--2",
    "specraif__bat-inner--3",
    "specraif__bat-inner--4",
    "specraif__bat-inner--5"
  ];

  return {
    init: function(value) {
      resultData.show();
      resultGraph.show();

      $(titleValue).html(value);
      $('.specraif__bat-inner').addClass(battery[value]);

      $(titleText).html(
        function() {
          if (value === 0 || value == 5) return "правильных ответов";
          if (value == 1) return "правильный ответ";
          if (value >= 2 && value <= 4) return "правильных ответа";
        }
      );
    }
  };
})();

App.init();

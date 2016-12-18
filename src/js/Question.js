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

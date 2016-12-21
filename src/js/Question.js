var questions = $('.specraif__item'),
    questionsData = $('.specraif__data'),
    label = $('.specraif__label'),
    labelActive = 'specraif__label--clicked',
    correct = '[data-status="correct"]',
    input = $('input[type=radio]'),
    btnNext = $('[data-btn=next]'),
    mobile = 768,
    count = 0,
    result = 0,
    elem;

module.exports = {
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
        return result;
      }
    });
  },
  showItem: function(index) {
    questions.eq(index).show();
    questionsData.eq(index).show();
  },
  hideItem: function(index) {
    if (index) {
      questions.eq(index).hide();
      questionsData.eq(index).hide();
    } else {
      questions.hide();
      questionsData.hide();
    }
  },
  value: this.reslut
};

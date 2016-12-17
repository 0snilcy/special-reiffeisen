jQuery(document).ready(function($) {
  var App = (function(){
    var questions = $('.specraif__item');
    var questionsData = $('.specraif__data');
    var questionsAnswer = $('.specraif__answer');
    var btnNext = $('[data-btn=next]');
    var btnStart = $('[data-btn=start]');
    var prev = $('.specraif__prev');
    var label = $('.specraif__label');
    var input = $('input[type=radio]');
    var resultData = $('.specraif__result');
    var resultGraph = $('.specraif__bat');
    var titleValue = $('.specraif__title-value');
    var titleText = $('.specraif__title-text');
    var mobile = 768;
    var elem;
    var count = 0;
    var result = 0;

    var battery = [
      null,
      "specraif__bat-inner--1",
      "specraif__bat-inner--2",
      "specraif__bat-inner--3",
      "specraif__bat-inner--4",
      "specraif__bat-inner--5"
    ];

    btnStart.on('click', function(event) {
      event.preventDefault();
      $('.specraif--prev').removeClass('specraif--prev');
      prev.hide();
    });

    $('.specraif__list').each(function(index, el) {
      var items = $(this).find('.specraif__label');

      function random(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
      }

      $(items.eq(random(0, items.length - 1))).prependTo($(this));
    });

    function showQuestion() {
      btnNext.hide();
      questions.eq(count).show();
      questionsData.eq(count).show();
      elem = '';
    }

    label.on('click', function(event) {
      if (!$(this).hasClass('specraif__label--clicked')) {
        $(this).addClass('specraif__label--clicked');
        $(this).siblings().off().find(input).prop('disabled', true);
        btnNext.show();


        if ($(this).find('[data-status="correct"]').length) {
          result++;
        }

        elem = '[data-id=' + $(this).find('input').attr('id') + ']';
        $(elem).show();

        if ($(window).width() > mobile) {
          questionsData.eq(count).hide();
        } else {
          $(elem).insertAfter($(this));
        }
      }
    });

    $(btnNext).on('click', function(event) {
      event.preventDefault();
      questions.eq(count).hide();
      questionsData.eq(count).hide();
      $(elem).hide();

      count++;

      if (questions.eq(count).length) {
        showQuestion(count);
      } else {
        location.hash = "result-" + result;
        checkHash();
      }
    });

    function showResult(value) {
      $(titleValue).html(value);
      $('.specraif__bat-inner').addClass(battery[value]);

      $(titleText).html(
        function() {
          if (value == 0 || value == 5) return "правильных ответов";
          if (value == 1) return "правильный ответ";
          if (value >= 2 && value <= 4) return "правильных ответа";
        }
      );

      resultData.show();
      resultGraph.show();
    }

    function checkHash() {
      var hash = /result-[0-5]/i.test(location.hash);

      if (hash) {
        var hashValue = location.hash.match( /\d/i )[0];
        questions.eq(count).hide();
        $(elem).hide();
        showResult(hashValue);
      } else {
        if (count === 0) {
          $('.specraif').addClass('specraif--prev');
          prev.show();
        }

        showQuestion(count);
      }
    }

    checkHash();
  })();
});

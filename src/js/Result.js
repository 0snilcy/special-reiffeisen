var Result = (function() {
  var resultData = $('.specraif__result'),
      resultGraph = $('.specraif__bat'),
      titleValue = $('.specraif__title-value'),
      titleText = $('.specraif__title-text'),
      battery = [
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

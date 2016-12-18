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

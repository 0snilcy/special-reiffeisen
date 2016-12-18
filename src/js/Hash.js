var Hash = (function() {
  var hash = /result-[0-5]/i.test(location.hash);

  return {
    init: function() {
      return hash ? location.hash.match( /\d/i )[0] : false;
    }
  };
})();

module.exports = function () {
  var hash = /result-[0-5]/i.test(location.hash);
  return hash ? location.hash.match( /\d/i )[0] : false;
}

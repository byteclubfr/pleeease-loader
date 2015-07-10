var pleeease = require("pleeease");

module.exports = function(source) {
  if (this.cacheable) this.cacheable();

  var options = this.options.pleeease || {};

  var callback = this.async();
  var result = pleeease.process(source, options);
  callback(null, result);
};

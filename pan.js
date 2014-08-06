var PResult = function(success, val, rest) {
  this.success = success;
  this.val = val;
  this.rest = rest;
};
PResult.prototype.full = function() {
  return this.success && this.rest == "";
};
var parseChar = function(c) {
  return function(text) {
    if( text[0] == c ) return new PResult(true, c, text.substr(1));
    return new PResult(false);
  };
};
exports.parseChar = parseChar;


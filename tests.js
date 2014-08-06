var fs = require("fs"),
    assert = require("./assert"),
    P = require("./pan");

var aParser = P.parseChar("a");
assert.equal(aParser("a").success, true);
assert.equal(aParser("b").success, false);

var aBoundParser = function(x) {
  return P.bind(P.unit(x), P.parseChar("a"));
};
assert.equal(aBoundParser("a").success, true);
assert.equal(aBoundParser("b").success, false);

var aBindsParser = function(x) {
  return P.binds(P.unit(x), P.parseChar("a"));
};
var aBindsParser2 = function(x) {
  return P.binds(P.unit(x), P.parseChar("a"), P.parseChar("b"));
};
assert.equal(aBindsParser("a").success, true);
assert.equal(aBindsParser("b").success, false);
assert.equal(aBindsParser2("ab").success, true);
assert.equal(aBindsParser2("bb").success, false);

var abParser = function(x) {
  return P.bind(P.bind(P.unit(x), P.parseChar("a")), P.parseChar("b"));
};
assert.equal(abParser("ab").success, true);
assert.equal(abParser("ba").success, false);

var aOrBParser = P.Try(P.parseChar("a"), P.parseChar("b"));
assert.equal(aOrBParser("a").success, true);
assert.equal(aOrBParser("b").success, true);
assert.equal(aOrBParser("c").success, false);

var parseAs = P.star(aParser);
assert.equal(parseAs("a").success, true);
assert.equal(parseAs("aa").success, true);
assert.equal(parseAs("aab").full(), false);

var body = fs.readFileSync(__dirname + "/test.pan") + "";
assert.equal(P.parse(body).success, true);
assert.equal(P.parse("").success, false);

assert();


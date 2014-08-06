var fs = require("fs"),
    assert = require("./assert"),
    P = require("./pan");

var aParser = P.parseChar("a");
assert.equal(aParser("a").success, true);
assert.equal(aParser("b").success, false);
assert();


module.exports = (function() {
  var assertions = [];
  var assert = function() {
    var dots = assertions.map(function(x) { return x.val ? "." : "F"; });
    var fails = assertions
      .filter(function(x) { return !x.val; })
      .map(function(x) { return x.desc; });

    console.log(dots.join("") + "\n");

    if( fails.length == 0 ) {
      console.log("All tests passed.");
    } else {
      fails.forEach(function(x) {
        console.log("Assertion failed: " + x + ".");
      });
    }
  };
  assert.equal = function(a, b) {
    assertions.push({ desc: a + " == " + b, val: a == b });
  };
  return assert;
}());


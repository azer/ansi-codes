var test = require('prova');
var codes = require("./");

test('is an object of ansi codes', function (t) {
  t.plan(4);
  t.equal(codes.red, '\033[31m');
  t.equal(codes.blue, '\033[34m');
  t.equal(codes.reset, '\033[0m');
  t.equal(codes.reset, '\033[0m');
});

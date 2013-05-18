var codes = require("./");

it('is an object of ansi codes', function(){
  expect(codes.red).to.equal('\033[31m');
  expect(codes.blue).to.equal('\033[34m');
  expect(codes.reset).to.equal('\033[0m');
  expect(codes.reset).to.equal('\033[0m');
});

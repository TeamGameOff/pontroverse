// use always require to import files / import will raise an error
assert = require('assert');

describe("server.test", function () {
  it("Server.test: server is not client", function () {
    assert.strictEqual(Meteor.isClient, false);
  });
});

// use always require to import files / import will raise an error
assert = require('assert');

describe("server.app-test", function () {
  it("Server.app-test: server is not client", function () {
    assert.strictEqual(Meteor.isClient, false);
  });
});

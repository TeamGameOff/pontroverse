// use always require to import files / import will raise an error
assert = require('assert');

describe("client.app-test", function () {
  it("Client.app-test: client is not server", function () {
    assert.strictEqual(Meteor.isServer, false);
  });
});

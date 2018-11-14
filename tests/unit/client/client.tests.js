// use always require to import files / import will raise an error
assert = require('assert');

describe("client.test", function () {
  it("Client.test: client is not server", function () {
    assert.strictEqual(Meteor.isServer, false);
  });
});

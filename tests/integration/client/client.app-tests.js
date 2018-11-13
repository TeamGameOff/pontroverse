import assert from "assert";

describe("client.app-test", function () {

  it("Client.app-test: client is not server", function () {
    assert.strictEqual(Meteor.isServer, false);
  });

});

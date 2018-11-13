import assert from "assert";

describe("client.test", function () {

  it("Client.test: client is not server", function () {
    assert.strictEqual(Meteor.isServer, false);
  });

});

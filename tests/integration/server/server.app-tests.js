import assert from "assert";

describe("server.app-test", function () {

  it("Server.app-test: server is not client", function () {
    assert.strictEqual(Meteor.isClient, false);
  });

});

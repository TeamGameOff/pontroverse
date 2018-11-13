import assert from "assert";

describe("server.test", function () {

  it("Server.test: server is not client", function () {
    assert.strictEqual(Meteor.isClient, false);
  });

});

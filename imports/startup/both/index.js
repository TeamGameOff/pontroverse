// Import modules used by both client and server through a single index entry point
// e.g. useraccounts configuration file.

// test for intergation test startup
if (Meteor.isAppTest) {
  // load server application integration tests
  if (Meteor.isServer) {
    import '/tests/integration/server';
  }
  // load client application integration tests
  if (Meteor.isClient) {
    import '/tests/integration/client';
  }
}

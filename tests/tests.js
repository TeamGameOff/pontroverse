// pontroverse tests main.js

// test for unit test startup
if (Meteor.isTest) {
  // load server unit tests
  if (Meteor.isServer) {
    import './unit/server';
  }
  // load client unit tests
  if (Meteor.isClient) {
    import './unit/client';
  }
}

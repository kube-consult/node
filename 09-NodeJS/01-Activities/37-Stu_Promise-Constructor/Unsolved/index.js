const util = require("util");

  // The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const waitForAsync = util.promisify(waitFor)

function waitFor(seconds, cb) {
  if (isNaN(seconds) || seconds < 1) {
    return cb(Error("Parameter 'seconds' must be a positive number!"));
  }

  setTimeout(function() {
    cb(null, "Success!");
  }, seconds * 1000);
}

waitForAsync(2)
  .then(function(msg) {
    console.log(msg); // msg is printed since seconds is more than 0
  })
  .catch(function(err) {
    console.log(err);
  });

waitForAsync(-5)
  .then(function(msg) {
    console.log(msg);
  })
  .catch(function(err) {
    console.log(err); // error is printed since 'seconds' is less than 1
  });
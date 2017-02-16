// var proxyquire = require("proxyquire").noPreserveCache();

describe("guardianGetRequest", function() {
  it('throws error if no URL passed', function(){
    expect(function(){
      require("../models/guardian-get-request")();
    }).toThrow("Need API request URL");
  });
});

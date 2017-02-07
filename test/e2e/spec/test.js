"use strict";

const expect = require("chai").expect,
  
	config = {path: "http://localhost:3000"},

  //config = require("../../../express-config")(process.env),
  

  testConfig = require("../config")(process.env);


describe("TEST", () => {
  it("should WELCOME", () => {

    browser.url(`/${config.path}`);
    browser.waitForVisible("#app", 5000);
    
    const result = browser.element("h1").getText();
    expect(result).to.be.eql("Welcome to Your Vue.js App");

  });
});

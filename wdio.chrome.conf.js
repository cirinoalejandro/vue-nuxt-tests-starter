"use strict";

const base = require("./wdio.conf.js").config;
base.capabilities = [{
    maxInstances: 5,
    //
    browserName: "chrome"
}];
base.services = ["selenium-standalone"];
exports.config = base;

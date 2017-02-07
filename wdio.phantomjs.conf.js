"use strict";

const base = require("./wdio.conf.js").config;
base.capabilities = [{
    maxInstances: 5,
    //
    browserName: 'phantomjs'
}];

exports.config = base;

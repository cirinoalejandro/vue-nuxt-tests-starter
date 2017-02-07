"use strict";

module.exports = (env) => {
  return {
    accountId: (env.NODE_ENV === "staging") ? "4f74a235b0dffc0210000015" : "4f74a235b0dffc0210000015"
  }
};

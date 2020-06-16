const DATA = require("./constant");

const findPath = (pathArr) => {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined") ? obj[key] : undefined,
    DATA,
  );
};

module.exports = findPath;

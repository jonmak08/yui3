/* THIS FILE IS GENERATED BY A BUILD SCRIPT - DO NOT EDIT! */
Handlebars.SafeString = {};
(function (exports) {
"use strict";
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};

exports["default"] = SafeString;
}(Handlebars.SafeString));
Handlebars.SafeString = Handlebars.SafeString['default'];

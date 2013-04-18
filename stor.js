/* global localStorage */
(function () {
  "use strict";

  window.stor = {
    add: addStor,
    get: getStor,
    remove: removeStor
  };

  function addStor (name, value) {
    if (value === void 0) return;

    var item = localStorage.getItem(name),
        vals = item && JSON.parse(item);
    if (!vals) vals = [];

    vals.push(value);
    localStorage.setItem(name, JSON.stringify(vals));
    return value;
  }

  function getStor (name) {
    var item = localStorage.getItem(name),
        vals = item && JSON.parse(item);

    return (vals && vals.length) ? vals : [];
  }

  function removeStor (name, value) {
    var item = localStorage.getItem(name),
        vals = item && JSON.parse(item);

    if (!vals) return;
    if (value === void 0) {
      localStorage.removeItem(name);
      return;
    }

    var idx = vals.indexOf(value);
    if (~idx) {
      vals.splice(idx, 1);
    }

    if (vals.length) {
      localStorage.setItem(name, JSON.stringify(vals));
    } else {
      localStorage.removeItem(name);
    }
  }

}());

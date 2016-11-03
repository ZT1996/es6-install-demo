'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var People = function People(name) {
    _classCallCheck(this, People);

    this.name = name;
};

var peo = new People('ZT');
console.log(peo.name);
(function() {
    'use strict';
    angular.module('application').service('common', function() {
        var compare;
        compare = function(a, b) {
            var amount, index, result, _i;
            if (a.length >= b.length) {
                amount = b.length - 2;
                result = 1;
            } else {
                amount = a.length - 2;
                result = -1;
            }
            for (index = _i = 0; 0 <= amount ? _i <= amount : _i >= amount; index = 0 <= amount ? ++_i : --_i) {
                if (a.charAt(index) > b.charAt(index)) {
                    return 1;
                }
                if (b.charAt(index) > a.charAt(index)) {
                    return -1;
                }
            }
            return result;
        };
        return {
            compare: function(a, b) {
                return compare(a, b) || compare(a.toLowerCase(), b.toLowerCase());
            }
        };
    });

}).call(this);

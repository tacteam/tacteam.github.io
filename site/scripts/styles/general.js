(function() {
    'use strict';
    angular.module('application').directive('bgColor', [
        '$parse',
        function($parse) {
            return {
                restrict: 'A',
                priority: 501,
                link: function(scope, element, attrs) {
                    return scope.$watch(attrs.bgColor, function(value) {
                        var bg_value;
                        if (!value) {
                            return;
                        }
                        bg_value = $parse(attrs.bgColor)(scope);
                        return element.css('background-color', bg_value);
                    });
                }
            };
        }
    ]).directive('borderColor', [
        '$parse',
        function($parse) {
            return {
                restrict: 'A',
                priority: 501,
                link: function(scope, element, attrs) {
                    return scope.$watch(attrs.borderColor, function(value) {
                        var border_value;
                        if (!value) {
                            return;
                        }
                        border_value = $parse(attrs.borderColor)(scope);
                        return element.css('border-color', border_value);
                    });
                }
            };
        }
    ]).directive('textColor', [
        '$parse',
        function($parse) {
            return {
                restrict: 'A',
                priority: 501,
                link: function(scope, element, attrs) {
                    return scope.$watch(attrs.textColor, function(value) {
                        var text_color;
                        if (!value) {
                            return;
                        }
                        text_color = $parse(attrs.textColor)(scope);
                        return element.css('color', text_color);
                    });
                }
            };
        }
    ]);

}).call(this);

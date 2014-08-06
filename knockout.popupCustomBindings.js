'use strict';
var jQueryWidget = function(element, valueAccessor, name, constructor) {
    var options = ko.utils.unwrapObservable(valueAccessor());
    var $element = $(element);
    setTimeout(function() { constructor($element, options) }, 0);

};

ko.bindingHandlers.dialog = {
    init: function(element, valueAccessor) {
        jQueryWidget(element, valueAccessor, 'dialog', function($element, options) {
            return $element.dialog(options);
        });
    }

};

ko.bindingHandlers.dialogCommand = {
    init: function(element, valueAccessor) {
        $(element).button().click(function() {
            var options = ko.utils.unwrapObservable(valueAccessor());
            $('#' + options.id).dialog(options.cmd || 'open');
        });
    }
};
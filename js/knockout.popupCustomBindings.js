ko.bindingHandlers.dialog = {
    init: function (element, valueAccessor) {
        'use strict';
        var options = ko.utils.unwrapObservable(valueAccessor());
        var $element = $(element);
        return $element.dialog(options);
    }
};

ko.bindingHandlers.dialogCommand = {
    init: function (element, valueAccessor) {
        'use strict';
        $(element).button().click(function () {
            var options = ko.utils.unwrapObservable(valueAccessor());
            $('#' + options.id).dialog(options.cmd || 'open');
        });
    }
};
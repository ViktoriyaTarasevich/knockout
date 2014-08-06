'use strict';
ko.bindingHandlers.fillItem = {
    init: function(element, valueAccessor) {
        var unwrapOption =  ko.unwrap(valueAccessor());
        if(unwrapOption >0){
            $(element).addClass('selectItem');
        }
        else{
            $(element).removeClass('selectItem');
        }

    },
    update: function(element, valueAccessor) {
        var unwrapOption =  ko.unwrap(valueAccessor());
        if(unwrapOption <= 0){
            $(element).removeClass('selectItem');
        }
        else{
            $(element).addClass('selectItem');
        }


    }
};
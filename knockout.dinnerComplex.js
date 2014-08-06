'use strict';
var LunchComplex = function(){
    var self = this;
    self.foods = (function(){
        var result = [];
        for (var i = 0; i < jsonData.length; i++)
        {
            result.push({
                title: jsonData[i].title,
                price: ko.observable(jsonData[i].price),
                image: jsonData[i].image,
                isSelected: ko.observable(false),
                selectedCount: ko.observable(0)
            });
        }
        return result;
    })()

    self.totalPrice = ko.computed(function() {
        var resultPrice = 0;
        for (var i = 0; i < self.foods.length; i++){
            if (self.foods[i].selectedCount() > 0) {
                resultPrice += (self.foods[i].price() * self.foods[i].selectedCount());
            }
        }
        return resultPrice;
    });
    self.fillSelectElement = function(){
        return 0;
    };
};

$(document).ready(function() {
    ko.applyBindings(new LunchComplex());
});


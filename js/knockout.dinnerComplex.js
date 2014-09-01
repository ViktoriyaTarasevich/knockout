'use strict';
var LunchComplex = function () {
    var self = this;
    self.foods = (function () {
        var result = [];
        for (var i = 0; i < model.length; i++) {
            result.push({
                title: model[i].title,
                price: ko.observable(model[i].price),
                image: model[i].image,
                selectedCount: ko.observable(0)
            });
        }
        return result;
    })();

    self.totalPrice = ko.computed(function () {
        var resultPrice = 0;
        for (var i = 0; i < self.foods.length; i++) {
            if (self.foods[i].selectedCount() > 0) {
                resultPrice += (self.foods[i].price() * self.foods[i].selectedCount());
            }
        }
        return resultPrice;
    });
};

$(document).ready(function () {
    ko.applyBindings(new LunchComplex());
});


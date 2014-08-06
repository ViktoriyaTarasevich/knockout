'use strict';
var LunchComplex = function(){
    var self = this;
    self.foods = ko.computed(function() {
            var items = [new Food()];
            items = jsonData;
            for(var i = 0; i < jsonData.length; i++){
                items[i].title = jsonData[i].title;
                items[i].image = jsonData[i].image;
                items[i].price = jsonData[i].price;
                items[i].selectedCount = 0;
            }
            return items;
        });

    self.totalPrice = ko.computed(function() {
        var resultPrice = 0;
        for (var i = 0; i < self.foods().length; i++){
            resultPrice = resultPrice + (self.foods()[i].price *self.foods()[i].selectedCount) ;
        }
        return resultPrice;
    });

};

var Food = function(){
    var self = this;
    self.title = ko.observable();
    self.image = ko.observable();
    self.price = ko.observable();
    self.selectedCount = ko.observable();
    self.isSelected = ko.computed(function(){
        if(self.selectedCount > 0){
            return true;
        }
        return false;
    });
};

$(document).ready(function() {
    ko.applyBindings(new LunchComplex());
});


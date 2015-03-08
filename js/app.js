/**
 * Created by Corbin on 10/29/2014.
 */

(function() {
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function () {
        this.product = gems;
    });

    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "A marvelous gem",
            canPurchase: true,
            images: [ {
                full: 'pic2.jpg'
                thumb: 'pic1.jpg'
            }
                ]
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "A great gem",
            canPurchase: false,
        }

    ];
})();
# ng-owl-carousel
This Directive for initializing Owl Carousel in AngularJS ng-repeat

*For use with Owl Carousel 2*

## Usage

Javascript:

    // Define app module
    angular
        .module('myApp', ['ng-owl-carousel']);

    // Create controller
    angular
        .module('myApp')
        .controller('MyController', MyController);

    function MyController() {
        this.owlOptions = {
           loop:false,
           margin:0,
           navText : ["<i class='glyphicon glyphicon-menu-left'></i>","<i class='glyphicon glyphicon-menu-right'></i>"]
        }
        this.items = ['item1', 'item2'];
    }

HTML:

    <div ng-controller="MyController as md">
        <data-owl-carousel class="owl-carousel" data-options="{{md.owlOptions}}">
            <div class="item" owl-carousel-item="" ng-repeat="(key, item) in md.items">{{ item }}</div>
        </data-owl-carousel>
    </div>
    
    
http://www.owlcarousel.owlgraphic.com/

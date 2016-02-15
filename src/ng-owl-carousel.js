(function () {
	'use strict';
	angular
		.module('ng-owl-carousel', [])
		.directive('owlCarousel', [
			'$parse',
			_owlCarousel
		])
		.directive('owlCarouselItem', [
			'$parse',
			_owlCarouselItem
		]);
		function _owlCarousel($parse) {
			return {
		        restrict: 'E',
		        transclude: false,
		        link: function (scope) {
		            scope.initCarousel = function(element) {
		              	// provide any default options you want
		                var defaultOptions = {};
		                var customOptions = scope.$eval($(element).attr('data-options'));
		                // combine the two options objects
		                for(var key in customOptions) {
		                    defaultOptions[key] = customOptions[key];
		                }
		                // init carousel
		                $(element).owlCarousel(defaultOptions);
		            };
		        }
			}
		}
		function _owlCarouselItem ($parse) {
		    return {
		        restrict: 'A',
		        transclude: false,
		        link: function(scope, element) {
		          // wait for the last item in the ng-repeat then call init
		            if(scope.$last) {
		                scope.initCarousel(element.parent());
		            }
		        }
		    };
		}
})();
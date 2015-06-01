app.directive('activeLink', ['$location', function ($location) {
    return {
        restrict: 'A',                                              // -Use as an attribute
        replace: false,                                             // - Don't replace the tags that contain it. 
        link: function (scope, elem, attrs) {                       // Nothing but a bit of code - run once on the 
          angular.element(                                          // containing element when the page is set up:
            elem[0].querySelectorAll(                               // Search the elements inside for an <a href="">
              'a[href$="' + $location.url().substring(1) + '"]')).  // containing the current url location,
            addClass('active');                                     // and attach the class active to that <a>.
          angular.element(elem[0].querySelectorAll('li a')).        // then go through all the <a> in list items
            on('click', function() {                                // within this element and ad a "click" function
              angular.element(elem[0].querySelectorAll('.active')). // that will find the current active
                removeClass('active');                              // <a>, remove the ".active" class, and instead
            angular.element(this)                                   // add it to the one just clicked.
              .addClass('active');
          });
        }
    };
}]);

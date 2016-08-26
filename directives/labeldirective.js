
ngCustomDirectivesApp.directive('customLabel', function () {
    return {

        restrict: 'EA',
        template: '<div class="jumbotron"><h2>My First Directive</h2><p>This is a simple example.</p></div>'
    }
})

ngCustomDirectivesApp.directive('likeButton', function () {
    return {
        restrict: 'EA',
        templateUrl: '../partials/likebutton.html',
        replace: true,
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                element.toggleClass('like');
            })
        }
    }
})

ngCustomDirectivesApp.directive('readymadeTable', function () {

    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../partials/tbldirective.html',
        scope: {
            rowsData:'='
        }
    }
})


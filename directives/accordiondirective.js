ngCustomDirectivesApp.directive('accordion', function () {
    return {
        restrict: 'EA',
        template: '<div ng-transclude></div>',
        replace: true,
        transclude: true,
        controllerAs: 'accordionController',
        controller: function () {
            var children = [];
            this.OpenMeHideAll = function (selectedchild) {
                angular.forEach(children, function (child) {
                    if (selectedchild != child) {
                        child.show = false;
                    }
                });
            };

            this.addChild = function (child) {
                children.push(child);
            }
        }
    }
})

ngCustomDirectivesApp.directive('accordionChild', function () {
    return {
        restrict: 'EA',
        template: '<div><div class="heading" ng-click="toggle()">{{title}}</div><div class="content" ng-show="show" ng-transclude></div></div>',
        replace: true,
        transclude: true,
        require: '^accordion',
        scope: {
            title:'@'
        },
        link: function (scope,element,attrs,accordionController) {
            scope.show = false;
            accordionController.addChild(scope);
            scope.toggle = function () {
                scope.show = !scope.show;
                accordionController.OpenMeHideAll(scope);
            }
        }
    }
})
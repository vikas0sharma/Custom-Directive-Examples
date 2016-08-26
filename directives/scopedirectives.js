ngCustomDirectivesApp.directive('parentScope', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<input type="text" ng-model="dataFromParent" style="border:1px solid red;"/>'
    }
})

ngCustomDirectivesApp.directive('inheritedScope', function () {
    return {
        restrict: 'E',
        scope: true,
        template: '<input type="text" ng-model="dataFromParent" style="border:1px solid red;"/>'
    }
})

ngCustomDirectivesApp.directive('isolatedScope', function () {
    return {
        restrict: 'E',
        scope: {
        },
        template: '<input type="text" ng-model="dataFromParent" style="border:1px solid red;"/>'
    }
})

ngCustomDirectivesApp.directive('isolatedScopeWithFilters', function () {
    return {
        restrict: 'E',
        scope: {
            oneWayBindData: '@oneWayAttr',
            twoWayBindData: '=twoWayAttr',
            methodBind:'&parentMethodName'
        },
        template: '<input type="text" ng-model="oneWayBindData" style="border:1px solid red;"/><br/><input type="text" ng-model="twoWayBindData" style="border:1px solid red;"/><br/><button type="button" ng-click="methodBind()">Change Value</button>'
    }
})

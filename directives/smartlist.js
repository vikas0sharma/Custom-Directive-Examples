

ngCustomDirectivesApp.directive('draggable', function () {
    return {
        require:'^smartList',
        link: function (scope, element, attr, listCTRL) {
            element.css({
                cursor: 'move',
            });
            attr.$set('draggable', true);

            function isBefore(x, y) {
                if (x.parentNode == y.parentNode) {
                    for (var i = x; i; i = i.previousSibling)
                    {
                        if (i == y)
                            return true;
                    }
                }
                return false;
            }
            element.on('dragenter', function (e) {
                if (e.target.parentNode != null) {
                    if (isBefore(listCTRL.source, e.target)) {
                        e.target.parentNode.insertBefore(listCTRL.source, e.target)
                    }
                    else {
                        e.target.parentNode.insertBefore(listCTRL.source, e.target.nextSibling)
                    }
                }
            })
            element.on('dragstart', function (e) {
                listCTRL.source = element[0];
                e.dataTransfer.effectAllowed = 'move';
            })
        }
    }
})


ngCustomDirectivesApp.directive('smartList', function () {
    return {
        restrict: 'EA',
        templateUrl: '../partials/listdirective.html',
        replace: true,
        scope: {
            items: '='
        },
        controller: function ($scope) {
            $scope.source = null;
        },
        controllerAs:'listCTRL'
    }
})


/*



*/
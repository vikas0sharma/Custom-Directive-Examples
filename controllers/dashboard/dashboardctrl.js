ngCustomDirectivesApp.controller('dashboardController', function ($scope) {
    $scope.rowdata = [
        {
            'Name': 'Vikas',
            'Age':'25'
        },
        {
            'Name': 'Kavi',
            'Age': '25'
        },
        {
            'Name': 'Piu',
            'Age': '25'
        }
    ]
    $scope.itemsdata = ['Apple', 'Mango', 'Banana', 'PineApple', 'Grapes', 'Oranges'];

    $scope.dataFromParent = "Data from parent";

    $scope.changeValue = function () {
        $scope.dataFromParent = "Changed data from parent";
    }

})


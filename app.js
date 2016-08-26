
/**
* @Author: Vikas Sharma
* @Email: mailbox.viksharma@gmail.com 
*
*/

var ngCustomDirectivesApp = angular.module('ngCustomDirectivesApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider.
    state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/dashboard.html'
    })
})



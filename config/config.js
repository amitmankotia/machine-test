(function () {

  angular.module("myApp",["ngRoute"])
          .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
            /*$locationProvider.html5Mode({
                enabled: true
              });*/
              $routeProvider
                .when('/', {
                  templateUrl: 'pages/login.html',
                })
                .when('/dashboard', {
                  templateUrl: 'pages/dashboard.html',
                })
                .otherwise({ redirectTo: '/' });
          }])

}())

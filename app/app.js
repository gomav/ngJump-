var customersApp = angular.module('customersApp', []);
customersApp.controller('customersController', function($scope) {

        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers=[{joined: '2002-12-02', name: 'Juan', city: 'Denver', orderTotal: 59.67},
                          {joined: '2002-11-02', name: 'Luis', city: 'Boulder', orderTotal: 99.67},
                          {joined: '2005-09-02', name: 'Pablo', city: 'Fort Collins', orderTotal: 5994.67},
                          {joined: '2010-12-02', name: 'Miguel', city: 'Louisville', orderTotal: 699.67}];
        $scope.doSort = function(propName){
            $scope.sortBy=propName;
            $scope.reverse= !$scope.reverse;
        };
});

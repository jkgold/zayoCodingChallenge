(function() {
  window.ROICalculator = angular.module('ROICalculator', [])
  // Sum of Revenues onetime and monthly
  .filter('sumOfValue', function() {
    return function(data, key) {
      if (typeof(data) === "undefined"|| typeof(key) === 'undefined') {
        return 0;
    }
      var sum = 0;
      for (var i = data.length-1; i >=0; i--) {
        sum += parseInt(data[i][key]);
      }
      return sum;
    };

  });

  ROICalculator.controller('ROIController', ['$scope', function($scope){
    $scope.revenueEnters = [];
    $scope.expenseEnters =[];
    //adding Revenue to DOM
    $scope.addRevenueEnter =function() {
      $scope.revenueEnters.push({
        text: $scope.revenueEnterText,
        once: $scope.revenueOneTime,
        monthly: $scope.revenueMonthly,
        done: false
      });
      //clear fields of Revenue
      $scope.revenueEnterText = "";
      $scope.revenueOneTime = "";
      $scope.revenueMonthly = "";
    };
    //adding Expense to DOM
    $scope.addExpenseEnter =function() {
      $scope.expenseEnters.push({
        text: $scope.expenseEnterText,
        once: $scope.expenseOneTime,
        monthly: $scope.expenseMonthly,
        done: false
      });
      //clear fields of Expense
      $scope.expenseEnterText = "";
      $scope.expenseOneTime = "";
      $scope.expenseMonthly = "";
    };


  }]);
})();

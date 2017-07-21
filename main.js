
angular.module('roicalculatorApp', [])
  .controller('OneTimeRevenueController', function() {
    var oneTimeRev = this;
    oneTimeRev.todos = [

      ];

    oneTimeRev.addTodo = function() {
      oneTimeRev.todos.push({text:oneTimeRev.todoText});
      v.todoText = '';
    };

    oneTimeRev.remaining = function() {
      var count = 0;
      angular.forEach(oneTimeRev.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    oneTimeRev.archive = function() {
      var oldTodos = oneTimeRev.todos;
      oneTimeRev.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) oneTimeRev.todos.push(todo);
      });
    };
  });

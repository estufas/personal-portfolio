var $scope, $location;
angular.module('PortfolioCtrls', [])
.controller('HomeCtrl', function($scope, $location, $window, $http) {
    game = new Chess();


	var makeRandomMove = function() {
	  var possibleMoves = game.moves();

	  // exit if the game is over
	  if (game.game_over() === true ||
	    game.in_draw() === true ||
	    possibleMoves.length === 0) return;

	  var randomIndex = Math.floor(Math.random() * possibleMoves.length);
	  game.move(possibleMoves[randomIndex]);
	  board.position(game.fen());

	  window.setTimeout(makeRandomMove, 500);
	};

	 $scope.message = {
        message: '',
        from: ''
    };
    $scope.send = function() {
        $http.post('/email', $scope.message).then(function success(res) {
        }, function error(res) {
            console.log(res)
        })
        $scope.message = {
            message: '',
            from:''
        }
    }


    $('ul li a').bind('click',function(event){
        var $anchor = $(this);
        $('body, html').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 700);
        $window.scrollTo(0, 0);
        event.preventDefault();
    });

	// board = ChessBoard('board', 'start');
	window.setTimeout(makeRandomMove, 500);
});


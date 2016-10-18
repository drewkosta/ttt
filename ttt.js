var app = {
  board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],

  xTurn: false,
  
  place: function (x, y) {
    app.board[y][x] = turn;
    app.printBoard();
  },

  printBoard: function () {
    console.log('-------------')
    console.log('| ' + app.board[0][0] + ' | ' + app.board[0][1] + ' | ' + app.board[0][2] + ' |');
    console.log('-------------')
    console.log('| ' + app.board[1][0] + ' | ' + app.board[1][1] + ' | ' + app.board[1][2] + ' |');
    console.log('-------------')
    console.log('| ' + app.board[2][0] + ' | ' + app.board[2][1] + ' | ' + app.board[2][2] + ' |');
    console.log('-------------')
    console.log('');
    app.xTurn = !app.xTurn;
    var player = app.xTurn ? 'X' : 'O';
    console.log('It\'s ' + player + '\'s turn!');
  },
  
  checkWin: function () {
    
  }
  
}

const mysql = require('mysql');

// for docker loaclhost
let connection = mysql.createConnection({
  host: 'host.docker.internal',
  user: 'pokeboba',
  password: 'boba1234',
  database: 'PokeBobaDB',
  port: '3306'
});

// // for local computer localhost
// let connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'pokeboba',
//   password: 'boba1234',
//   database: 'PokeBobaDB',
//   port: '3306'
// });


connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
  });
 
module.exports = connection;

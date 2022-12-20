require('dotenv').config();

const mysql = require('mysql');

connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// connect to the MySQL server
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let createGreetings = `create table if not exists greetings(
    id int primary key auto_increment,
    value varchar(255) not null
  )`;

  let insertGreeting = `insert into greetings (value) values ("Hello A2odev!")`;

  connection.query(createGreetings, function(err, results, fields){
    if(err){
      console.log(err.message);
    }
  });

  connection.query('truncate table greetings', function(err, results, fields){
    if(err) throw err;
    console.log('The result is: ', results);
  });

  connection.query(insertGreeting,function(err, results, fields){
    if(err){
      console.log(err.message);
    }
  });

  connection.query('show tables', function(err, results, fields){
    if(err) throw err;
    console.log('The result is: ', results[0]);
  });

  connection.query(`select * from greetings`, function(err, results, fields){
    if(err) throw err;
    console.log('The result is: ', results[0].value);
  });
  
  console.log('Database connected');
});

module.exports = connection
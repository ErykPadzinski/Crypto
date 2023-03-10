const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
    user: 'root',
    password: 'root',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    database: 'Crypto',
})

app.post('/register', (req, res) => {
  const username = req.body.fullName;
  const password = req.body.password;
  const email = req.body.email;


  db.query("INSERT INTO Users (fullName, password, email) VALUES (?,?,?)", 
  [username, password, email],
   (err, result)=> {
    console.log(err);
  }
  );
});

app.post('/profile', (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const username = req.body.fullName;

  
  db.query
  ("SELECT * FROM Users WHERE email = ? AND password = ?", 
  [email, password],
   (err, result) => {
    if(err) {
      res.send({err: err});
    }
     
    
   if (result.length > 0) {
        res.send(result);
        res.send(username)
   } else {
        res.send({message: "Wrong email or password"});
   }
    
    }
  );
  
})

app.listen(3001, () => {
  console.log("Running server");
} )
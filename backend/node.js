const express = require('express')
var bodyParser = require("body-parser")
var cors = require('cors')

var mysql = require('mysql')
const app = express()
const jwt = require('jsonwebtoken');
var conf = require('./config')
var bcrypt = require('bcrypt');
conf = new conf();


const saltRounds = 12;
var connection = mysql.createConnection({
    host: 'localhost',
    user: conf.DBuser,
    password: conf.DBpass,
    database: 'evidenca_zaposlenih'
})

var auth = function(req, res, next) {
    const header = req.headers['authorization'];
    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        jwt.verify(token, "asd", function(err, decoded) {
            if (err) {
                console.log(err)
                return false;
            }
          req.user=jwt.decode(token)
            next();
        });
    } else {
        res.send("Access forbidden");
    }
}

connection.connect(function(err) {
    if (err) {
        console.log("Napaka v povezavi do baze" + err);
    } else {
        console.log('You are now connected...')
    }

})
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/data', auth, function(req, res) {

    var sql = 'SELECT id,username,password FROM user WHERE id="' + req.user.user + '" ';
    connection.query(sql, function(err, results) {
        if (err) throw err
        var data = results;
        console.log(data);
        res.send(data);
    });
}, err => {
    console.log("Error " + err);
});

app.post('/auth', function(request, response) {

    var username = request.body.username;
    var password = request.body.password;


    var sql = "SELECT * FROM user WHERE username = ?";
    connection.query(sql, [username], function(err, results) {
        if (err) {
            res.send(false);
        } else if (results == "") {
            response.status(200).json(false);
        } else {
          
          bcrypt.compare(password, results[0].password, function (err, result) {
            if(result==true){

            const JWTToken = jwt.sign({
                    user: results[0].id
                },
                'asd', {
                    expiresIn: 144000
                });
            response.status(200).json(JWTToken);
          }else{
            response.status(200).json(false);
          }
            });
        }
    
    });


});




app.listen(3000, () => console.log('Example app listening on port 3000!'))
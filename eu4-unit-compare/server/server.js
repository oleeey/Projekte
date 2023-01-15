var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors())

app.get("/units", function (req, res) {
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'oli',
        server: 'localhost', 
        database: 'eu4units' ,
        trustServerCertificate: true
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Infantry', function (err, recordset) {
             
            if (err) console.log(err)

            // send records as a response
            res.json(recordset);
            
        });
    });
});

app.get('/', function (req, res) {
   
    
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
/*
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())

const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("./data/inf.csv");
const rl = readline.createInterface({ input: stream });
let data = [];

rl.on("line", (row) => {
    data.push(row.split(","));
});

rl.on("close", () => {
    console.log(data);
    app.get("/units", function (req, res) {
        res.json({
            data
        })
    })

    app.get('/', function (req, res) {

    });
    
    var server = app.listen(5000, function () {
        //console.log('Server is running..');
    });
});

*/
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())

const fs = require('fs')
const csv = require('fast-csv');
const data = []

fs.createReadStream('./data/inf.csv')
    .pipe(csv.parse({}))
    .on('error', error => console.error(error))
    .on('data', row => data.push(row))
    .on('end', () => app.get("/units", function (req, res) {
                        res.json({
                            data
                        })
                    }));

                    app.get('/', function (req, res) {

                    });

                    var server = app.listen(5000, function () {
                        //console.log('Server is running..');
                    });
















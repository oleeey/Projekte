var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())

const fs = require('fs')
const csv = require('fast-csv');
const data = []

function getData(name) {
    fs.createReadStream(`./data/${name}.csv`)
    .pipe(csv.parse({}))
    .on('error', error => console.error(error))
    .on('data', row => data.push(row))
    .on('end', () => app.get(`/${name}`, function (req, res) {
                        res.json({
                            data
                        })
                    }));
}

let units = ["inf", "cav", "art"];
getData("inf")

app.get('/', function (req, res) {

});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});















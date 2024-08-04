var express = require('express');
var bodyParser = require('body-parser');
const fs = require("fs");
const path = require('path');
const NodeCache = require('node-cache');
var router = express.Router();
var app = express();
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

const teacher = JSON.parse(fs.readFileSync('../학생정보/선생님계정.json'));
const student = JSON.parse(fs.readFileSync('../학생정보/학생계정.json'));

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

/* GET home page. */
router.post('/', function (req, res, next) {
    for ( var i=0; i<student.length; i++) {
        if ( student[i].id == req.body.id && student[i].password == req.body.password) {
            res.sendFile(path.join(__dirname, "../../client/public/main.html"));
            cache.set("id", student[i]["성명"])
        }
    }
});

router.post('/oo', function (req, res, next) {
    var data = cache.get("id")
    console.log(data)
    for ( var i=0; i<student.length; i++) {
        if ( student[i]["성명"] == data ) {
            dd = {};
            dd[0] = student[i];
            dd[0].during = req.body.during
            fs.writeFileSync("../학생정보/외출박신청.json", JSON.stringify(dd));
            res.send(dd)
        }  
    }
});

module.exports = router;

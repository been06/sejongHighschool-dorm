var express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const NodeCache = require('node-cache');
var router = express.Router();
var app = express();
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

const teacher = JSON.parse(fs.readFileSync('../server/json/TeacherAccount.json'));
const student = JSON.parse(fs.readFileSync('../server/json/StudentAccount.json'));

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

// login.html을 서빙하는 라우트 추가
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/src/pages/login.html'));  
});

// 로그인 미들웨어
function checkLogin(req, res, next) {
  const loggedIn = cache.get('id');
  if (!loggedIn) {
    return res.redirect('/login');  // !로그인 >> 로그인페이지 호출
  }
  next(); 
}

/* POST 로그인 처리 */

router.post('/', function (req, res, next) {
  let loggedIn = false;
  
  for (let i = 0; i < student.length; i++) { //ID PW 비교
    if (student[i].id == req.body.id && student[i].password == req.body.password) {
      res.sendFile(path.join(__dirname, '../../client/public/main.html'));
      cache.set('id', student[i]['성명']);  // 로그인된 사용자 정보 캐시에 저장
      loggedIn = true;
      break;
    }
  }

  // 로그인 실패 시
  if (!loggedIn) {
    return res.redirect('/login'); 
  }
});

/* 외출 신청 라우트 */
router.post('/oo', function (req, res, next) {
  var data = cache.get('id');
  console.log(data);
  for (var i = 0; i < student.length; i++) {
    if (student[i]['성명'] == data) {
      dd = {};
      dd[0] = student[i];
      dd[0].during = req.body.during;
      fs.writeFileSync('../json/outing.json', JSON.stringify(dd));
      res.send(dd);
    }
  }
});


module.exports = router;

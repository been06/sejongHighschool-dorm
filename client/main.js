let studentBtn = document.getElementById('studentTextclicker');
let teacherBtn = document.getElementById('teacherTextclicker');
let studentId = document.getElementById('studentjs');
let teacherId = document.getElementById('teacherjs');


let loginHeader = document.getElementById('changeloginheader');
let loginBtn = document.getElementById('changeloginbtn');
// let sjlogo1 = document.getElementById('sjhslogo1');
// let sjlogo2 = document.getElementById('sjhslogo2');

// sjlogo1.classList.remove('animate__animated', 'animate__bounce');
// sjlogo2.style.opacity = "0";
// sjlogo1.style.position = "relative";
// sjlogo2.style.position = "relative";
teacherId.style.display = 'none';
teacherBtn.style.opacity = '.6';

function editcss(X, Y, x, y) {
  //user랑 admin 텍스트 색&&블록 사라지게하기 >>>함수임(아래에서 사용);
  X.style.display = 'block';
  Y.style.display = 'none';
  x.style.opacity = '1';
  y.style.opacity = '.6';
}

studentBtn.addEventListener('click', function () {
  // while(!userbtn.addEventListener('click')){
  editcss(studentId, teacherId, studentBtn, teacherBtn);
  loginHeader.style.color = '#148cff';
  loginBtn.style.background = '#148cff';
  loginBtn.style.boxShadow = '0 5px 22px #148cff';
  loginBtn.addEventListener('mouseenter', function () {
    loginBtn.style.boxShadow = '0 0 0 #148cff';
  });
  loginBtn.addEventListener('mouseleave', function () {
    loginBtn.style.boxShadow = '0 5px 22px #148cff';
  });
  // }
  // sjlogo2.style.animationPlayState = "running";
  // setTimeout(function(){
  //     sjlogo2.style.animationPlayState = "paused";
  // }, 1000);
});

teacherBtn.addEventListener('click', function () {
  // while(!adminbtn.addEventListener('click')){
  editcss(teacherId, studentId, teacherBtn, studentBtn);
  loginHeader.style.color = '#FF4646';
  loginBtn.style.background = '#FF4646';
  loginBtn.style.boxShadow = '0 5px 22px #FF4646';
  
  loginBtn.addEventListener('mouseenter', function () {
    loginBtn.style.boxShadow = '0 0 0 #FF4646';
  });
  loginBtn.addEventListener('mouseleave', function () {
    loginBtn.style.boxShadow = '0 5px 22px #FF4646';
  });
  // }
  // editcss(adminid, userid, adminbtn, userbtn);
  // sjlogo1.style.animationPlayState = "running";
  // setTimeout(function(){
  //     sjlogo1.style.animationPlayState = "paused";
  // }, 1000);
});

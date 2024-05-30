let studentBtn = document.getElementById('studentTextclicker');
let teacherBtn = document.getElementById('teacherTextclicker');
let studentId = document.getElementById('studentjs');
let teacherId = document.getElementById('teacherjs');
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
  // }
  // sjlogo2.style.animationPlayState = "running";
  // setTimeout(function(){
  //     sjlogo2.style.animationPlayState = "paused";
  // }, 1000);
});

teacherBtn.addEventListener('click', function () {
  // while(!adminbtn.addEventListener('click')){
  editcss(teacherId, studentId, teacherBtn, studentBtn);
  // }
  // editcss(adminid, userid, adminbtn, userbtn);
  // sjlogo1.style.animationPlayState = "running";
  // setTimeout(function(){
  //     sjlogo1.style.animationPlayState = "paused";
  // }, 1000);
});

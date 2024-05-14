let userbtn = document.getElementById('usertextclicker');
let adminbtn = document.getElementById('admintextclicker');
let userid = document.getElementById('useridjs');
let adminid =  document.getElementById('adminidjs');
// let sjlogo1 = document.getElementById('sjhslogo1');
// let sjlogo2 = document.getElementById('sjhslogo2');


// sjlogo1.classList.remove('animate__animated', 'animate__bounce');
// sjlogo2.style.opacity = "0";
// sjlogo1.style.position = "relative";
// sjlogo2.style.position = "relative";
adminid.style.display = "none";
adminbtn.style.opacity = ".6";

function editcss(X, Y, x, y){//user랑 admin 텍스트 색&&블록 사라지게하기 >>>함수임(아래에서 사용);
    X.style.display = "block";
    Y.style.display = "none";
    x.style.opacity = "1";
    y.style.opacity = ".6";
}

userbtn.addEventListener('click', function(){
    // while(!userbtn.addEventListener('click')){
        editcss(userid, adminid, userbtn, adminbtn);
    // }
    // sjlogo2.style.animationPlayState = "running";
    // setTimeout(function(){
    //     sjlogo2.style.animationPlayState = "paused";
    // }, 1000);
})

adminbtn.addEventListener('click', function(){
    
    // while(!adminbtn.addEventListener('click')){
        editcss(adminid, userid, adminbtn, userbtn);
    // }
    // editcss(adminid, userid, adminbtn, userbtn);
    // sjlogo1.style.animationPlayState = "running";
    // setTimeout(function(){
    //     sjlogo1.style.animationPlayState = "paused";
    // }, 1000);

});
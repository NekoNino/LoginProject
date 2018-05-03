checkUser();
console.log('check login');

function checkUser(){
    if(localStorage.getItem('loginChecker') === 'true'){
        window.location.href = "todolist.html";
    }
}

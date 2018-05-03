
checkLogin();
console.log('check login');

function checkLogin(){
    if(localStorage.getItem('loginChecker') === 'false'){
        window.location.href = "index.html";
    }
    if(localStorage.getItem('loginChecker') === null){
        window.location.href = "index.html";
    }
}

function logout() {
    console.log('test logout');
    localStorage.loginChecker = 'false';
    window.location.href = 'index.html';
}

document.getElementById('btnLogout').addEventListener('click', logout, false);

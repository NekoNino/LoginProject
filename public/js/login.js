
function validate(e){
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "test" && password == "test123"){
        alert ("Login successfully");
        localStorage.setItem('loginChecker', 'true');
        window.location.href = "todolist.html";
       // window.location.href = "http://www.google.se";
    }
    else if (!username == "test" && password == "test123"){
        localStorage.setItem('loginChecker', 'false');
    }

    //localStorage.setItem('loginChecker', 'false');
}
addEventListener('submit',validate,false);



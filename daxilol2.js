export var username;

function myfunction(event){
    event.preventDefault();
    username=document.querySelector("#username1").value;
    var passwordInput=document.querySelector("#password").value;
    var user=localStorage.getItem(username);
    var data=JSON.parse(user);

    if(user!=null){
    if(username==data.username){
        if(passwordInput==data.password){
            if(username=="akhundov_ziya"){
                window.location.href="user-panel2.html";
            }
            else if(username=="Millisoft"){
                window.location.href="user-panel-millisoft.html";
            }
            else(
                alert("Account is under construction, please log in again a few minutes later")
            )
        }
        else{
            alert("Wrong username or password");
        }
    }
    else{
        alert("Wrong username or password");
    }
}
else{
    alert("Wrong username or password");
}
}
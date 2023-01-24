const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function login(){
    var submit=document.querySelector(".submit");
    submit.addEventListener("click",function(event){    
		event.preventDefault();
        var usernameInput=document.querySelector("#username1").value;
        var passwordInput=document.querySelector("#password").value;
        var user=localStorage.getItem(usernameInput);
        var data=JSON.parse(user);
        if(user!=null){
        if(usernameInput==data.username){
            if(passwordInput==data.password){
                 if(usernameInput=="Millisoft"){
                    window.location.href="../userPanel/user-panel-millisoft.html";
                }
                else{
                    let userLogin={
                        username:usernameInput,
                        userPassword:passwordInput
                    }
                    localStorage.setItem("Login",JSON.stringify(userLogin));
                    window.location.href="../userPanel/user-panel2.html";
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
    else{
        alert("Wrong username or password");
    }
    })
}
login();

function add_data(){
    var submit=document.querySelector(".create");
    submit.addEventListener("click",function(){
        var usernameInput=document.querySelector("#username").value;
        var emailInput=document.querySelector("#email1").value;
        var passwordInput=document.querySelector("#password1").value;
        var array=[];
        var a=0;
        var user={
		username:usernameInput,
        email:emailInput,
        password:passwordInput,
        photo:"profile.jpg",
        darkmode:"light",
        verification:"waiting"
    }
    if( usernameInput!="" && passwordInput!="" && emailInput!=""){
        if( localStorage.length!=0){
            for (var i=0; i < localStorage.length; i++)  {
            if(localStorage.key(i)==usernameInput){
                alert("username is taken please choose other name");
                a=1
            }
         }
         if(a!=1){
            localStorage.setItem(usernameInput,JSON.stringify(user))
            alert("Account Created!");
            document.querySelector("#username").value="";
            document.querySelector("#email1").value="";
            document.querySelector("#password1").value="";
        }
        }
        else{
            localStorage.setItem(usernameInput,JSON.stringify(user))
            alert("Account Created");
            document.querySelector("#username").value="";
            document.querySelector("#email1").value="";
            document.querySelector("#password1").value="";
        }
    }
   else{
    alert("Inputs are empty!")
   } 
    }) 
}
add_data();


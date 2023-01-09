// import { usernameInput } from './daxilol.js';
// document.querySelector("#navbar_account_p").innerText=usernameInput;
// loading
var main=document.querySelector(".page");
window.addEventListener("load",()=>{
const loader=document.querySelector(".loading");
main.style.display="none";
var mytime=setTimeout(()=>{
    loader.classList.add("load-hidden");
    main.style.display="block";
},2000);
loader.addEventListener("transitionend",()=>{
    document.body.removeChild("loading")
})

})



function unitable(){
    var namearray=[{name:"Abbasova Ləman Şakir"},{name:"Axundov Ziya Həmid"},{name:"Ağa Nicat Nizami"},{name:"Ağayev Fuad Rüfis"},{name:"Ağayev Rəvan Araz"},{name:"Babayeva Lamiə Elman"},{name:"Babazadə Vasif Asif"},{name:"Barxudarlı Kənan Yaqub"},{name:"Bayramov Nurlan Elman"},{name:"Eyvazov Məhəmməd Elşən"},{name:"Gülməmmədov Əli İmamcan"},{name:"Həsənzadə Hüseyn Elşən"},{name:"Kərimli Nadir Rəhim"},{name:"Mustafayeva Günel Cahangir"},{name:"Məlikli Mehdi Ramil"},{name:"Məmmədli Rəşid Bəxtiyar"},{name:"Nəzirli Cavad Azad"},{name:"Osmanova Nəzrin Namiq"},{name:"Qasımova Kəmalə Marif"},{name:"Rəhimov Müşviq Oqtay"},{name:"Tahirov Samir Nəzir"},{name:"Yusifov Nurlan Famil"},{name:"Şalanzadə Elnur Azər"},{name:"Əliyeva Şəbnəm Fizuli"},{name:"Ələsgərova Ləman Vahid"},{name:"Əmiraslanov İlkin Zaur"},{name:"Əsgərov Elmir Nizami"},{name:"Əsgərov Səyyad Elşən"}];
function number(){
    for(let i=1;i<=namearray.length;i++){
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        let val=document.createTextNode(i);
        tr.appendChild(td);
        td.appendChild(val);
        document.querySelector("#jurnal1").appendChild(tr);
        tr.classList.add("names")
    }
}
number();
function data(){
    let i=0;
    namearray.forEach(item =>{
        var td=document.createElement("td");
        var val=document.createTextNode(item.name);
        td.appendChild(val);
        document.querySelectorAll(".names")[i].appendChild(td);
        i++;
    });    
}
data();

function date(){
    
    for(let j=0;j<6;j++){
        let i=0;
    namearray.forEach(item =>{
        var button=document.createElement("button");
        var val=document.createTextNode("d/e");
        var td=document.createElement("td");
        td.classList.add("tds")
        button.appendChild(val);
        td.appendChild(button);
        button.classList.add("dates")
        document.querySelectorAll(".names")[i].appendChild(td);
        i++;
    }); 
    
}
}
date();
function journalhead(){
    var thead=document.querySelectorAll(".journalhead");
    thead.forEach(item =>{
        var iebutton=document.createElement("button");
        var iebuttonvalue=document.createTextNode("ie");
        iebutton.classList.add("iebutton")
        iebutton.appendChild(iebuttonvalue);
        item.appendChild(iebutton);
    })
}
journalhead();
function ie(){
    var ie=document.querySelectorAll(".iebutton");
    ie.forEach((element,index )=> {
        element.addEventListener("click",function(){
            var number=index;
            var buttons=document.querySelectorAll(".names");
            buttons.forEach(item =>{
                if(item.querySelectorAll(".dates")[index].innerText=="d/e" ){
                    item.querySelectorAll(".dates")[index].classList.add("ie");
                    item.querySelectorAll(".dates")[index].classList.add("block");
                    item.querySelectorAll(".dates")[index].innerText="i/e";
                }
            })
        });
    });
    
    
   
    
}
ie();
let btn;
function mark(){
    let a=document.querySelectorAll(".dates");
    a.forEach(item =>{
        item.addEventListener("click",function(){
            btn=this
            document.querySelector(".modal").style.display="block";
        });

    })
    
}
mark();
let label=document.querySelectorAll(".label")
label.forEach(x=>{
    x.addEventListener("click",function(){
        let reng=x.classList[1]
        btn.innerText=x.innerText
        btn.classList.add(reng)
        document.querySelector(".modal").style.display="none";
        btn.classList.add("block")

    })
})

let close=document.querySelector("#close");
close.addEventListener("click", function(){
    document.querySelector(".modal").style.display="none";
});


journal.addEventListener("click", function(){
    journal1.style.display="block";
    document.querySelector(".lab").style.display="none";
});
lab.addEventListener("click",function(){
    document.querySelector(".lab").style.display="block";
    document.querySelector(".modal").style.display="none";
    journal1.style.display="none";
})

function number1(){
    for(let i=1;i<=namearray.length;i++){
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        let val=document.createTextNode(i);
        tr.appendChild(td);
        td.appendChild(val);
        document.querySelector("#jurnal2").appendChild(tr);
        tr.classList.add("names1")
    }
}
number1();
function data1(){
    let i=0;
    namearray.forEach(item =>{
        var td=document.createElement("td");
        var val=document.createTextNode(item.name);
        td.appendChild(val);
        document.querySelectorAll(".names1")[i].appendChild(td);
        i++;
    });    
}

data1();
let close1=document.querySelector("#close1");
close1.addEventListener("click", function(){
    document.querySelector(".lab-modal").style.display="none";
});
labbutton.addEventListener("click",function(){
    document.querySelector(".lab-modal").style.display="block";
});

function labisi(){
    var z=1;
  lablog.addEventListener("click", function(){
    var a=document.querySelector("#count").value;
    for(let j=0;j<a;j++){
        let i=0;
    namearray.forEach(item =>{
        var button=document.createElement("button");
        var val=document.createTextNode("d/e");
        var td=document.createElement("td");
        td.classList.add("tds")
        button.appendChild(val);
        td.appendChild(button);
        button.classList.add("dates1")
        document.querySelectorAll(".names1")[i].appendChild(td);
        i++;
        
    }); 
        var c=document.createElement("th");
        var tarix=document.createElement("p");
        var tarixvalue=document.createTextNode("Vaxt aralığı");
        tarix.appendChild(tarixvalue);
        var p=document.createElement("p");
        var pvalue=document.createTextNode("Lab isi №"+z)
        p.appendChild(pvalue);
          tarix.classList.add("labbasliq")
        c.appendChild(p);
        c.appendChild(tarix);
        labisibasliq.appendChild(c);  
        z=z+1;
        
    }
    var v=0;
    var t=labisibasliq.getElementsByTagName("th");
    for(let r=0;r<t.length;r++){
        if(t.className=="netice"){
            v=r;
         }
    }
   for(let y=0;y<namearray.length;y++){
    var neticetd=document.createElement("td");
    var neticep=document.createElement("p");
    neticetd.appendChild(neticep);
    neticep.classList.add("netice2");
    neticetd.classList.add("netice1")
    document.querySelectorAll(".names1")[v].appendChild(neticetd);
    v=v+1;
   }
    

    var x=document.createElement("th");
    var y=document.createTextNode("Nəticə");
    x.classList.add("netice");
    x.appendChild(y);
    labisibasliq.appendChild(x);
    var b=document.querySelector(".lab-modal");
    b.style.display="none";
    labbutton.style.display="none";
    
    timeinterval();
    labevalution();

})

}
labisi();

var btn1;
function timeinterval(){
   let a=document.querySelectorAll(".labbasliq");
    a.forEach(item =>{
        item.addEventListener("click", function(){
            document.querySelector(".time-interval-modal").style.display="flex";
            btn1=this;
        })
    });
}
timeintervalbutton.addEventListener("click",function(){
    var b=document.createElement("p");
        var firstinput=document.querySelector("#first-date").value;
        var secondvalue=document.querySelector("#finish-date").value;
        var pvalue=document.createTextNode(firstinput+"-"+secondvalue);
        b.appendChild(pvalue);
        btn1.innerHTML="";
        btn1.appendChild(b)
        btn1.classList.add("block");
        firstinput="";
        secondvalue="";
        document.querySelector(".time-interval-modal").style.display="none";
        
})
timeclose.addEventListener("click", function(){
    document.querySelector(".time-interval-modal").style.display="none";
});

close3.addEventListener("click", function(){
    document.querySelector(".lab-evaluation-modal").style.display="none"
});

function labevalution(){
    var btn1;
    var sum=0;
    var a=document.querySelectorAll(".dates1");
    var z="";
    var tambal=0;
    var natamambal=0
    var sifirbal=0
    a.forEach(item =>{
        item.addEventListener("click",function(){
        sum=0;
            let say=+count.value+2;
        // var v=this.parentElement.parentElement.children[say];
        // var c=document.querySelectorAll(".dates1");
         z=this.parentElement.parentElement.lastChild.children[0];
        var x=document.createTextNode(10);
         tambal=10/Number(document.querySelector("#count").value);
         natamambal=tambal/2;
         sifirbal=0
        sum=sum+tambal;
  
            btn1=this;
            document.querySelector(".lab-evaluation-modal").style.display="block";
        })
    });
    tamam.addEventListener("click", function(){
        // console.log(v);
        // console.log(z);
        let result=+(z.innerText);
        z.innerText=result+sum;
                // v.appendChild(z);      
    });
    natamam.addEventListener("click", function(){
        // console.log(v);
        // console.log(z);
        let result=+(z.innerText);
         z.innerText=result+natamambal;
                // v.appendChild(z);      
    });
    let label=document.querySelectorAll(".label1")
    label.forEach(x=>{
    x.addEventListener("click",function(){
        let reng=x.classList[1]
        btn1.innerText=x.innerText;
        btn1.classList.add(reng);
        document.querySelector(".lab-evaluation-modal").style.display="none";
        btn1.classList.add("block")
    })
})
}

}
unitable();
document.querySelector(".navbar-account").addEventListener("click",function(){
    document.querySelector(".navbar-account-options").classList.toggle("account-block");
})
function changeImage(){
    const image_input=document.querySelector("#photo");
    var uploaded_image="";
    image_input.addEventListener("change",function(){
        const reader =new FileReader();
        reader.readAsDataURL(image_input.files[0])
        reader.addEventListener("load",()=>{
            uploaded_image=reader.result;
            let account=document.querySelector("#navbar_account_p").innerText;
            var user={
                username:account,
                password:JSON.parse(localStorage.getItem(account)).password,
                email:JSON.parse(localStorage.getItem(account)).email,
                photo:uploaded_image,
                verification:JSON.parse(localStorage.getItem(account)).verification,
                dark:JSON.parse(localStorage.getItem(account)).dark
            }
            localStorage.setItem(account,JSON.stringify(user))
            document.querySelector("#profilePhoto").src=JSON.parse(localStorage.getItem(account)).photo;
            settingsAccountImage.src=JSON.parse(localStorage.getItem(account)).photo;
        })
    })
}
changeImage();

let account=document.querySelector("#navbar_account_p").innerText;
document.querySelector("#profilePhoto").src=JSON.parse(localStorage.getItem(account)).photo;


function settings(){
    settingsXmark.addEventListener("click",function(){
        document.querySelector(".settings").classList.toggle("settings-block");
        document.querySelector(".container").classList.toggle("table-display");
    });
    navAccountSettings.addEventListener("click",function(event){
        event.preventDefault();
        document.querySelector(".settings").classList.toggle("settings-block");
        document.querySelector(".container").classList.toggle("table-display");
    })
    settingsAccountImage.src=JSON.parse(localStorage.getItem(account)).photo;
    settingsAccountName.innerText=JSON.parse(localStorage.getItem(account)).username;
    settingsPasswordChangeButton.addEventListener("click",function(){
        let account=document.querySelector("#navbar_account_p").innerText;
        let currentPassword=document.querySelector("#currentPassword").value;
        let newPassword=document.querySelector("#newPassword").value;
        let newPasswordConfirm=document.querySelector("#ConfirmNewPassword").value;
            var user={
                username:account,
                password:newPassword,
                email:JSON.parse(localStorage.getItem(account)).email,
                photo:JSON.parse(localStorage.getItem(account)).photo,
                verification:JSON.parse(localStorage.getItem(account)).verification,
                dark:JSON.parse(localStorage.getItem(account)).dark
            }
            if(currentPassword==JSON.parse(localStorage.getItem(account)).password){
                if(newPassword==newPasswordConfirm){
                    localStorage.setItem(account,JSON.stringify(user));
                    alert("Password Succesfully Changed");
                    document.querySelector("#currentPassword").value="";
                    document.querySelector("#newPassword").value="";
                    document.querySelector("#ConfirmNewPassword").value="";
                }
                else{
                    alert("new passwords do not match")
                }
            }
            else{
                alert("Wrong Password")
            }
    })
    
}
settings();
function darkmode(){
    let account=document.querySelector("#navbar_account_p").innerText;
    if(JSON.parse(localStorage.getItem(account)).dark=="dark"){
        document.querySelector(".slider").classList.toggle("right");
        document.body.classList.add("dark");
        document.querySelector(".settings").classList.add("dark");
        document.querySelector("#settingsXmark").classList.add("white-color");
        document.querySelector(".menu-bar").classList.add("dark-background")
        // var a=document.querySelectorAll(".menu-blocks");
        // a.forEach(item=>{
        //     item.classList.toggle("dark-background");
        // })
        // var a=document.querySelector(".groups-block");
        // var b=a.querySelectorAll("p");
        // b.forEach(item=>{
        //     item.classList.add("white-color");
        // })
        var td=document.querySelectorAll("td");
        td.forEach(item=>{
            item.classList.add("white-color");
        })
        var tr=document.querySelectorAll("tr");
        tr.forEach(item=>{
            item.classList.add("white-color");
        })
    }
    else{
        document.body.classList.remove("dark");
        document.querySelector(".settings").classList.remove("dark");
        document.querySelector("#settingsXmark").classList.remove("white-color");
        document.querySelector(".menu-bar").classList.remove("dark-background")
        // var a=document.querySelectorAll(".menu-blocks");
        // a.forEach(item=>{
        //     item.classList.toggle("dark-background");
        // })
        // var a=document.querySelector(".groups-block");
        // var b=a.querySelectorAll("p");
        // b.forEach(item=>{
        //     item.classList.remove("white-color");
        // })
        var td=document.querySelectorAll("td");
        td.forEach(item=>{
            item.classList.remove("white-color");
        })
        var tr=document.querySelectorAll("tr");
        tr.forEach(item=>{
            item.classList.remove("white-color");
        })
    }

    document.getElementById("input").addEventListener("change",function(){
        document.querySelector(".slider").classList.toggle("right");
        document.body.classList.toggle("dark");
        if(document.body.className=="dark"){
            var user={
                username:account,
                password:JSON.parse(localStorage.getItem(account)).password,
                email:JSON.parse(localStorage.getItem(account)).email,
                photo:JSON.parse(localStorage.getItem(account)).photo,
                dark:"dark",
                verification:JSON.parse(localStorage.getItem(account)).verification
            }
            localStorage.setItem(account,JSON.stringify(user));
            document.querySelector(".slider").classList.add("right");
            document.querySelector(".slider").classList.remove("left");
        }
        else{
            var user={
                username:account,
                password:JSON.parse(localStorage.getItem(account)).password,
                email:JSON.parse(localStorage.getItem(account)).email,
                photo:JSON.parse(localStorage.getItem(account)).photo,
                dark:"light",
                verification:JSON.parse(localStorage.getItem(account)).verification
            }
            localStorage.setItem(account,JSON.stringify(user));
            document.querySelector(".slider").classList.add("left");
            document.querySelector(".slider").classList.remove("right");
        }
        document.querySelector(".settings").classList.toggle("dark");
        document.querySelector("#settingsXmark").classList.toggle("white-color");
        document.querySelector(".menu-bar").classList.toggle("dark-background")
        // var a=document.querySelectorAll(".menu-blocks");
        // a.forEach(item=>{
        //     item.classList.toggle("dark-background");
        // })
        // var a=document.querySelector(".groups-block");
        // var b=a.querySelectorAll("p");
        // b.forEach(item=>{
        //     item.classList.toggle("white-color");
        // })
        var td=document.querySelectorAll("td");
        td.forEach(item=>{
            item.classList.toggle("white-color");
        })
        var tr=document.querySelectorAll("tr");
        tr.forEach(item=>{
            item.classList.toggle("white-color");
        })
    })
}
darkmode();

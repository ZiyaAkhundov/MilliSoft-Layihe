document.querySelector("#bars").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector(".main-nav1").style.transform="translateX(0%)";
})
document.querySelector("#mainNav1Close").addEventListener("click",function(){
    document.querySelector(".main-nav1").style.transform="translateX(-100%)";
document.querySelector("#bars").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector(".main-nav1").style.transform="translateX(0%)";
})
})
document.querySelector("#mainNav1Close").addEventListener("click",function(){
    document.querySelector(".main-nav1").style.transform="translateX(-100%)";
});
$(document).ready(function (){
    $("#tedris").click(function (event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 2000);
    });
    
});
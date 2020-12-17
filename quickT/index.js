const overLay = document.querySelector(".overlay");
const loG = document.querySelector(".login");
const logForm = document.querySelector(".login-form");
const body =  document.body;
const overSignUp = document.querySelector(".not-a-user");
const eye = document.querySelector(".eye");
const forms = document.querySelectorAll("form");
const gif = document.querySelector(".gifs");
const signUp = document.querySelector(".sign-up-form");
loG.addEventListener("click", ()=>{
    overLay.style.cssText = "display: block;";
    logForm.style.cssText = "display: block; z-index: 1;";
});
(function (){
    let close = overLay.firstElementChild;
    close.addEventListener("click", ()=>{
        overLay.setAttribute("style", "display: none;");
        logForm.setAttribute("style", "display: none;");
        console.log(`Removed`);
    });
    body.addEventListener("keyup", function(ev){
        ev.preventDefault();
        if(ev.keyCode == 27) {
            overLay.setAttribute("style", "display: none; transition: .2s;");
            logForm.setAttribute("style", "display: none; transition: .2s;");
            console.log("ESCAPED");
            signUp.setAttribute("style", "visibilty: hidden;")
        }
    });
    overSignUp.addEventListener("click", function(d){
        d.preventDefault();
        logForm.style.cssText = "visibility: hidden;";
        signUp.style.cssText = "display: block;";
    })
    eye.addEventListener("click", coder);
    

    overLay.addEventListener("click", function(){
        overLay.setAttribute("style", "display: none; transition: .2s;");
            logForm.setAttribute("style", "display: none; transition: .2s;");
            console.log("ESCAPED");
            signUp.setAttribute("style", "visibilty: hidden;")
    });
}())
function coder(){
    let pwd = document.querySelector("input[type='password']");
        if (pwd.type == "password") {
            pwd.type = "text";
        }
        else {
            pwd.type = "password";
        }
}
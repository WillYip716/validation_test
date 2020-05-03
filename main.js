



window.onload = function(){

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const form  = document.getElementsByTagName('form')[0];
    const emailRegex = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9]+.com/;
    const nRegex = /^[a-zA-Z]+$/;

    const addNameCheck = function(ele){
        ele.addEventListener("input", function (event) {
            if (nRegex.test(ele.value)) {
                ele.setCustomValidity("");
            } else {
                ele.setCustomValidity("Please enter a valid name");
            }
        });
    }

    const addEmailCheck = function(ele){
        ele.addEventListener("input", function (event) {
            if (emailRegex.test(ele.value)) {
                ele.setCustomValidity("");
            } else {
                ele.setCustomValidity("Please enter a valid email");
            }
        });
    }

    form.addEventListener("submit" ,function(){
        if(nRegex.test(fname.value)&&nRegex.test(lname.value)&&emailRegex.test(email.value)){
            alert("Yor info has been submitted");
        }
        else{
            alert("Please go back and fix your errors");
        }
    });

    addNameCheck(fname);
    addNameCheck(lname);
    addEmailCheck(email);


    
}

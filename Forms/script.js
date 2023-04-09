const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
});
function validate1(){
    var text = document.getElementById("email").value;
    var text1 = document.getElementById("email");
    var pass1 = document.getElementById("password");
    var conpass = document.getElementById("confirmPassword");
    
    var regx = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9-]+).([a-z])(.[a-z])?$/; 
    if(!regx.test(text)){
        //document.getElementById("emailid").innerHTML="Invalid";
        // document.getElementById("email").classList.add("emailred");
        text1.style.border = "2px solid red";
        return false
    }

    else if(pass1.value.trim() == ""){
        text1.style.border = "2px solid #333"
        pass1.style.border = "2px solid red";
        return false;
    }
    else if(pass1.value !== conpass.value){
        pass1.style.border = "2px solid #333"
        conpass.style.border = "2px solid red";
        return false;
    }
    else{
        work();
        return true
    }
}

function validate2(){
    // var regxtwitter = /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/(#!\/)?[a-zA-Z0-9_]+$/;
    // var regxlinkedin=/(ftp|http|https):\/\/?((www|\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    // var regxgithub = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/;
    var regxtwitter = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    var regxlinkedin =/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    var regxgithub = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    var twitter = document.getElementById("twitter").value;
    var github = document.getElementById("github").value;
    var linkedin = document.getElementById("linkedin").value;
    var twitter1 = document.getElementById("twitter");
    var linkedin1 = document.getElementById("linkedin");
    var github1 = document.getElementById("github");

    if((!regxtwitter.test(twitter)) || (twitter === "")){
        twitter1.style.border = "2px solid red";
        return false;
    }
    else if((!regxlinkedin.test(linkedin)) || (linkedin === "")){
        linkedin1.style.border = "2px solid red";
        return false;
    }
    else if((!regxgithub.test(github)) || (github === "")){
        github1.style.border = "2px solid red";
        return false;
    }
    else if(regxtwitter.test(twitter) && regxlinkedin.test(linkedin) && regxgithub.test(github)){
        work();
        return true;
    }
}

function validate3(){
    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var phone = document.getElementById("phone");
    var fname1 = document.getElementById("firstName").value;
    var lname1 = document.getElementById("lastName").value;
    var phone1 = document.getElementById("phone").value;
    var regphone = /^[6-9][0-9]{9}$/;
    if(fname1.trim() === ""){
        fname.style.border = "2px solid red";
        return false;
    }
    else if(lname1.trim() === ""){
        lname.style.border = "2px solid red";
        return false;
    }
    else if(!regphone.test(phone1)){
        phone.style.border = "2px solid red"
        return false
    }
    else if(regphone.test(phone1)){
        phone.border.style = "2px solid green";
        return true;
        work();
    }
}

if(currentStep < 0){
    currentStep = 0;
    formSteps[currentStep].classList.add("active");
    showCurrentStep();
}
function work(){
    multiStepForm.addEventListener("click", e => {
        let incrementor;
        if(e.target.matches("[data-next]")){
            incrementor = 1;
        }
        else if(e.target.matches("[data-previous]")){
            incrementor = -1;
        }  
    
        if(incrementor == null) return
    
        const inputs = [...formSteps[currentStep].querySelectorAll("input")]
        const allValid = inputs.every(input => input.reportValidity())
        if(allValid){
            currentStep += incrementor;
            showCurrentStep();
            updateprogressbar();
        }
    })
}
function showCurrentStep() {
    formSteps.forEach((step,index) => {
        step.classList.toggle("active", index === currentStep);
})
}
const progressSteps = document.querySelectorAll(".progress-step");
const progress = document.getElementById("progress");
function updateprogressbar(){
    progressSteps.forEach((progressStep,idx) => {
        if(idx < currentStep+1){
            progressStep.classList.add('progress-step-active')
        }
        else{
            progressStep.classList.remove('progress-step-active')
        }
    });
    const progressActive = document.querySelectorAll(".progress-step-active");
    progress.style.width = ((progressActive.length-1)/(progressSteps.length-1)) * 100 + "%";
}

const logo = document.querySelectorAll("#logo path");
for(let i=0;i<logo.length;i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
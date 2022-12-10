import Validation from './validation.js';
import {submitDataAnimation} from "./animation.js";

import sendDataToApi from "./api_call.js";

// get elements

let submitBtn = document.getElementById('submitBtn')


const validation = new Validation()




function submitData(){
    if(validation.userNameValidation()== true && validation.emailValidationFunction()== true && validation.passwordValidation()== true && validation.confirmPasswordValidation()== true){
        
        submitDataAnimation('show')    
        submitBtn.addEventListener('click',(event)=>{
            event.preventDefault()
            sendDataToApi()
        })
        
    }
    else{
        submitDataAnimation('hide') 
    }
}





// to listen for changes in the page 
window.addEventListener('change',submitData)


    


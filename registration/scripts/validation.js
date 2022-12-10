import {errorContainerAnimation} from "./animation.js";

export default class Validation{
    // name validation by regular expression to validate name and numbers allowed only and cannot contain special character or space 

     userNameValidation(){
        //user text error selector
        let textErrContainer = document.querySelector('.err');
        let textErrText = document.querySelector('.errorText');
    
        let nameValidation = /(^[a-zA-Z]+(\d)?[a-zA-Z]{4,15}$)/g;
        let name = document.getElementById('username').value;
            
            if(nameValidation.test(name)){
                // error container  
                errorContainerAnimation('hide',textErrContainer,textErrText)
                return true
            }
            else{
                errorContainerAnimation('show',textErrContainer,textErrText)
                return false
            }
      }
    
    
    // email validation by checking the input value if it has email formation (name - @ symbol - mail name - .com)
    
        emailValidationFunction(){
    //email error selector
    let emailErrorContainer = document.querySelector('.emailError');
    let emailTextErr = document.querySelector('.emailErrorText');
    
        const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
        let emailInputValue = document.querySelector('#email').value
    
        if(emailRegExp.test(emailInputValue)){
            errorContainerAnimation('hide',emailErrorContainer,emailTextErr)
            return true
        }
        else{
            errorContainerAnimation('show',emailErrorContainer,emailTextErr)
            return false
        }
    
    }
    
    
    // password validation by checking only the length of password input value
    
        passwordValidation(){
        let passwordVal = document.querySelector("#password").value
        let passowrdErrorContainer = document.querySelector('.passwordError');
        let passowrdTextErr = document.querySelector('.passwordErrorText');
            
        if(passwordVal.length >= 8){
            errorContainerAnimation('hide',passowrdErrorContainer,passowrdTextErr)
           return true
       }
       else{
        errorContainerAnimation('show',passowrdErrorContainer,passowrdTextErr)
           return false
       }
    }
    
    // confirm password validation
       confirmPasswordValidation(){
        let passwordVal = document.querySelector("#password").value
        let conFirmPassVal = document.querySelector("#confirmPassword").value
    
    
        let confirmPasswordErrContainer = document.querySelector('.confirmPasswordError');
        let confirmPasswordErrText = document.querySelector('.confirmPasswordErrorText');
    
        if(passwordVal === conFirmPassVal){
            errorContainerAnimation('hide',confirmPasswordErrContainer,confirmPasswordErrText)
           return true
       }
       else{
        errorContainerAnimation('show',confirmPasswordErrContainer,confirmPasswordErrText)
    
           return false
       }
    }
    
    

}

const validation = new Validation()
document.getElementById('username').addEventListener("change",validation.userNameValidation)

document.getElementById('email').addEventListener('change',validation.emailValidationFunction)

document.getElementById('password').addEventListener('change',validation.passwordValidation)

document.getElementById('confirmPassword').addEventListener('change',validation.confirmPasswordValidation)


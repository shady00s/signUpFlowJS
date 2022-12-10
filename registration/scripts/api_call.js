import saveEmailAndTokenToSessionStorage from "./utils/session_storage.js";

const registrationForm = document.querySelector('form');

const registrationData = new FormData(registrationForm);


// api call 
export default function sendDataToApi(){
    console.log('working')
    const URL = 'https://goldblv.com/api/hiring/tasks/register';
    fetch(URL,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(registrationData)
    }
    
    ).then((val)=>{
        if(val.status === 200){
            saveEmailAndTokenToSessionStorage(registrationData.get('email'))
           document.location.replace('../view/succsess_page.html')
        
        }else{
            console.log(val.body)
        }
    })

}
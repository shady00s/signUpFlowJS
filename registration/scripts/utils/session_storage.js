// save token to session storage function

export default function saveEmailAndTokenToSessionStorage(emailVal){

    window.sessionStorage.setItem('userEmail',emailVal)
}
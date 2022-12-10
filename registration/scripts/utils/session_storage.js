// save token to session storage function

export default function saveEmailAndTokenToSessionStorage(emailVal){
    window.sessionStorage.removeItem('userEmail')
    window.sessionStorage.setItem('userEmail',emailVal)
}

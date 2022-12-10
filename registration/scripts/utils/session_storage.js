// save token to session storage function

export default function saveEmailAndTokenToSessionStorage(emailVal){
    // if there is previous email remove it and insert new one
    window.sessionStorage.removeItem('userEmail')
    window.sessionStorage.setItem('userEmail',emailVal)
}

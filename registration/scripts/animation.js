// simple animation that when the validation finds error it trigger the error text animation and container
export  function errorContainerAnimation(order,textContainer,textelement){
    

    switch (order) {
        case 'show':
            textContainer.classList.remove('errHiddenContainer')
            textContainer.classList.add('activeError')
            textelement.classList.remove('errHiddenText')
            textelement.classList.add('errorText')
            break;

        case 'hide':
            textContainer.classList.remove('activeError')
            textContainer.classList.add('errHiddenContainer')
            break;
        default:
            break;
    }


}


export  function submitDataAnimation(order){
    const submitBtn = document.querySelector('#submitBtn')

    switch (order) {
        case 'show':
            submitBtn.disabled =false
            submitBtn.classList.remove('deactivatedBtn')
            submitBtn.classList.add('submitBtn')
            break;
        case 'hide':
            submitBtn.disabled =true
            submitBtn.setAttribute('disabled','enabled')
            submitBtn.classList.add('deactivatedBtn')
            break;
        default:
            break;
    }
}
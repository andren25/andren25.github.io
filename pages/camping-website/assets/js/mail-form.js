document.getElementsByClassName('mail')[0].addEventListener('click',()=>{
    document.getElementsByClassName('mail-form-ico')[0].setAttribute('style', 'display:none')
    document.getElementsByClassName('mail-form-placeholder')[0].setAttribute('style', 'display:none')
    document.getElementsByClassName('mail-form-input')[0].focus()
})
document.getElementsByClassName('mail')[0].addEventListener('focusout',()=>{
    document.getElementsByClassName('mail-form-ico')[0].setAttribute('style', 'display:block')
    document.getElementsByClassName('mail-form-placeholder')[0].setAttribute('style', 'display:block')
})
function cleanForm(){
    document.getElementsByClassName('search-input__search')[0].setAttribute('style', 'display:none')
    document.getElementsByClassName('search-input__com')[0].setAttribute('style', 'display:none')
    document.getElementsByClassName('search-input__text')[0].focus()
}
document.getElementsByClassName('search-input__search')[0].addEventListener('click',()=>{
    cleanForm()
})
document.getElementsByClassName('search-input__com')[0].addEventListener('click',()=>{
    cleanForm()
})
document.getElementsByClassName('search-input__text')[0].addEventListener('click',()=>{
    cleanForm()
})
document.getElementsByClassName('search-input__text')[0].addEventListener('focusout',()=>{
    document.getElementsByClassName('search-input__search')[0].setAttribute('style', 'display:block')
    document.getElementsByClassName('search-input__com')[0].setAttribute('style', 'display:block')
    document.getElementsByClassName('search-input__text')[0].value = ''
})
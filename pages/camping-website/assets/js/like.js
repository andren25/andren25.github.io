var likes = document.querySelectorAll('.gallery-card__like').length
var count = 0;
for(var i=0; i<likes; i++){
    document.getElementsByClassName('gallery-card__like')[i].addEventListener('click',()=>{
        document.getElementsByClassName('gallery-card__like')[count].setAttribute("style","background-image:url('../camping-website/assets/img/heart-hover.png')")
        count++
    })
}
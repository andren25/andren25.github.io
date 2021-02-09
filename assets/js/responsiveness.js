function responsiveness(element, maxWidth, maxHeight){
    var p = maxWidth / maxHeight;
    window.onresize = ()=>{
        var width = element.offsetWidth;
        var height = width / p;
        element.setAttribute('style', 'height:' + height + 'px')
    }
}
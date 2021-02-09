var gallery = document.getElementsByClassName('works-posts')[0];

function filterSelection(c){
    //Mark the element with the class
    elms = gallery.childElementCount;
    if(c =='works-tab__all'){
        console.log(c);
        for(i=0;i<elms;i++){
            document.getElementsByClassName('works-post')[i].style.display = 'block';
            if(i >= 6)
                document.getElementsByClassName('works-post')[i].style.display = 'none';
        }
        document.getElementsByClassName('works-tab__all')[0].style.backgroundColor = '#777';
        document.getElementsByClassName('works-tab__all')[0].style.color = 'white';
        document.getElementsByClassName('works-tab__psd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('works-tab__psd')[0].style.color = 'black';
        document.getElementsByClassName('works-tab__xd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('works-tab__xd')[0].style.color = 'black';
    }
    if(c == 'works-tab__psd'){
        console.log(c);
        for(i=0;i<elms;i++){
            if(document.getElementsByClassName('works-post')[i].classList.contains('works-post-psd'))
                document.getElementsByClassName('works-post')[i].style.display = 'block';
            else
                document.getElementsByClassName('works-post')[i].style.display = 'none';
        }
        document.getElementsByClassName('works-tab__psd')[0].style.backgroundColor = '#777';
        document.getElementsByClassName('works-tab__psd')[0].style.color = 'white';
        document.getElementsByClassName('works-tab__all')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('works-tab__all')[0].style.color = 'black';
        document.getElementsByClassName('works-tab__xd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('works-tab__xd')[0].style.color= 'black';
    }
    if(c == 'works-tab__xd'){
        console.log(c);
        for(i=0;i<elms;i++){
            if(document.getElementsByClassName('works-post')[i].classList.contains('works-post-xd'))
                document.getElementsByClassName('works-post')[i].style.display = 'block';
            else
                document.getElementsByClassName('works-post')[i].style.display = 'none';
        }
        document.getElementsByClassName('works-tab__xd')[0].style.backgroundColor = '#777';
        document.getElementsByClassName('works-tab__xd')[0].style.color = 'white';
        document.getElementsByClassName('works-tab__psd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('works-tab__psd')[0].style.color = 'black';
        document.getElementsByClassName('works-tab__all')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('works-tab__all')[0].style.color = 'black';
    }
    //Show only the elements of that class

}

document.getElementsByClassName('works-tab__all')[0].addEventListener('click',()=>{
    filterSelection('works-tab__all');
});

document.getElementsByClassName('works-tab__psd')[0].addEventListener('click',()=>{
    filterSelection('works-tab__psd');
});

document.getElementsByClassName('works-tab__xd')[0].addEventListener('click',()=>{
    filterSelection('works-tab__xd');
});
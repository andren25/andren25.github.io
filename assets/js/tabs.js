var gallery = document.getElementsByClassName('m-works-posts')[0];

function filterSelection(c){
    //Mark the element with the class
    elms = gallery.childElementCount;
    if(c =='c-works-tab-selected'){
        console.log(c);
        for(i=0;i<elms;i++){
            document.getElementsByClassName('o-works-post')[i].style.display = 'block';
            if(i >= 6)
                document.getElementsByClassName('o-works-post')[i].style.display = 'none';
        }
        document.getElementsByClassName('c-works-tab-selected')[0].style.backgroundColor = '#777';
        document.getElementsByClassName('c-works-tab-selected')[0].style.color = 'white';
        document.getElementsByClassName('c-works-tab-psd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('c-works-tab-psd')[0].style.color = 'black';
        document.getElementsByClassName('c-works-tab-xd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('c-works-tab-xd')[0].style.color = 'black';
    }
    if(c == 'c-works-tab-psd'){
        console.log(c);
        for(i=0;i<elms;i++){
            if(document.getElementsByClassName('o-works-post')[i].classList.contains('o-works-post-psd'))
                document.getElementsByClassName('o-works-post')[i].style.display = 'block';
            else
                document.getElementsByClassName('o-works-post')[i].style.display = 'none';
        }
        document.getElementsByClassName('c-works-tab-psd')[0].style.backgroundColor = '#777';
        document.getElementsByClassName('c-works-tab-psd')[0].style.color = 'white';
        document.getElementsByClassName('c-works-tab-selected')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('c-works-tab-selected')[0].style.color = 'black';
        document.getElementsByClassName('c-works-tab-xd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('c-works-tab-xd')[0].style.color= 'black';
    }
    if(c == 'c-works-tab-xd'){
        console.log(c);
        for(i=0;i<elms;i++){
            if(document.getElementsByClassName('o-works-post')[i].classList.contains('o-works-post-xd'))
                document.getElementsByClassName('o-works-post')[i].style.display = 'block';
            else
                document.getElementsByClassName('o-works-post')[i].style.display = 'none';
        }
        document.getElementsByClassName('c-works-tab-xd')[0].style.backgroundColor = '#777';
        document.getElementsByClassName('c-works-tab-xd')[0].style.color = 'white';
        document.getElementsByClassName('c-works-tab-psd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('c-works-tab-psd')[0].style.color = 'black';
        document.getElementsByClassName('c-works-tab-selected')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('c-works-tab-selected')[0].style.color = 'black';
    }
    //Show only the elements of that class

}

document.getElementsByClassName('c-works-tab-selected')[0].addEventListener('click',()=>{
    filterSelection('c-works-tab-selected');
});

document.getElementsByClassName('c-works-tab-psd')[0].addEventListener('click',()=>{
    filterSelection('c-works-tab-psd');
});

document.getElementsByClassName('c-works-tab-xd')[0].addEventListener('click',()=>{
    filterSelection('c-works-tab-xd');
});
var currentPage = 1;

function paginationBtn(arr,size = 5){
    let btn = '';
    pagList.forEach((elem,i)=>{
        for(let i = 0;i<arr.length/size;i++){
            
        }
    });
}

function fillPosts(){
    var initial = (currentPage * 6) - 6;
    var elms = document.getElementsByClassName('m-works-posts')[0].childElementCount;
    
    if(currentPage == 1){
        for(var i=0;i<elms;i++){
            if(i >= 6)
                document.getElementsByClassName('o-works-post')[i].style.display = 'none';
            else
            document.getElementsByClassName('o-works-post')[i].style.display = 'block';
        }
    }
    if(currentPage > 1){
        for(var i=0;i<elms;i++){
            document.getElementsByClassName('o-works-post')[i].style.display = 'none';
        }
        for(var i=initial;i<=6;i++){
            document.getElementsByClassName('o-works-post')[i].style.display = 'block';
        }
    }
}

fillPosts();

document.getElementsByClassName('c-works-pagination-previous')[0].addEventListener('click',()=>{
    if(currentPage > 1){
        currentPage = currentPage - 1;
        fillPosts();
    }
});

document.getElementsByClassName('c-works-pagination-next')[0].addEventListener('click',()=>{
    currentPage = currentPage + 1;
    fillPosts();
});
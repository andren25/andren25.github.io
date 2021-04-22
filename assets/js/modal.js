var data = {
    0:{
        "src":"Camping Website",
        "modal":"assets/img/camping-website.jpg",
        "website":"http://andren25.github.io/pages/camping-website/",
        "image":"http://andren25.github.io/assets/img/camping-website.jpg",
        "file":"https://drive.google.com/file/d/1h9wm2XNK-UKGbVq1fQ3Jj9c4bEbIENKc/view?usp=sharing"
    },
    1:{
        "src":"SpaceDrive",
        "modal":"assets/img/space-drive.jpg",
        "website":"http://andren25.github.io/pages/space-drive/",
        "image":"http://andren25.github.io/assets/img/space-drive.jpg",
        "file":"https://drive.google.com/file/d/11hmnMJXe90AasUqeIPaE8tYSEdvsL1qG/view?usp=sharing"
    },
    2:{
        "src":"Travel Cream",
        "modal":"assets/img/travel-cream.jpg",
        "website":"http://andren25.github.io/pages/travel-cream/",
        "image":"http://andren25.github.io/assets/img/travel-cream.jpg",
        "file":"https://drive.google.com/file/d/15v99bPDkEukVC7uGdS36Q5IYnQjun0k4/view?usp=sharing"
    },
    3:{
        "src":"Zenwork",
        "modal":"assets/img/zenwork.jpg",
        "website":"http://andren25.github.io/pages/zenwork/",
        "image":"http://andren25.github.io/assets/img/zenwork.jpg",
        "file":"https://drive.google.com/file/d/1NAqYFmoGKLvUC87ppxtwYyaoK8N2IMYz/view?usp=sharing"
    },
    4:{
        "src":"Marketing",
        "modal":"assets/img/marketing.jpg",
        "website":"http://andren25.github.io/pages/marketing/",
        "image":"http://andren25.github.io/assets/img/marketing.jpg",
        "file":"https://drive.google.com/file/d/13WyudbuNy0xWp4OTCvk80ajiMgIfbLH9/view?usp=sharing"
    },
    5:{
        "src":"Fashion",
        "modal":"assets/img/fashion.jpg",
        "website":"http://andren25.github.io/pages/fashion/",
        "image":"http://andren25.github.io/assets/img/fashion.jpg",
        "file":"https://drive.google.com/file/d/1QMOnYLb00CSWPcq-mieoUnL-5YGNCl7u/view?usp=sharing"
    },
    6:{
        "src":"Clubin",
        "modal":"assets/img/clubin.jpg",
        "website":"http://andren25.github.io/pages/clubin/",
        "image":"http://andren25.github.io/assets/img/clubin.jpg",
        "file":"https://drive.google.com/file/d/1-ez7bV2453fX3uDQ2mn-c8TMw6yOSVua/view?usp=sharing"
    }
};
var p = document.getElementsByClassName('m-works-posts')[0];
for(var i=0,len=p.children.length;i<len;i++){
    (function(index){
        p.children[i].onclick = function(){
            document.getElementsByClassName('m-modal')[0].style.display = 'flex';
            document.getElementsByClassName('c-modal-img-content')[0].src = data[index].modal;
            document.getElementsByClassName('modal-link__website')[0].setAttribute('href',data[index].website);
            document.getElementsByClassName('c-modal-links-name')[0].innerHTML = data[index].src;
            document.getElementsByClassName('modal-img__website')[0].setAttribute('href',data[index].image);
            document.getElementsByClassName('modal-file__website')[0].setAttribute('href',data[index].file);
        }
    })(i);
}

document.getElementsByClassName('c-modal-exit')[0].addEventListener('click',()=>{
    document.getElementsByClassName('m-modal')[0].style.display = 'none';
});
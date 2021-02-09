var data = {
    0:{
        "src":"Camping Website",
        "modal":"assets/img/camping-website.jpg",
        "website":"http://andren25.github.io/pages/camping-website/",
        "image":"http://andren25.github.io/assets/img/camping-website.jpg",
        "file":"http://andren25.github.io/assets/files/CampingWebsite.xd"
    },
    1:{
        "src":"SpaceDrive",
        "modal":"assets/img/space-drive.jpg",
        "website":"http://andren25.github.io/pages/space-drive/",
        "image":"http://andren25.github.io/assets/img/space-drive.jpg",
        "file":"http://andren25.github.io/assets/files/SpaceDrive.xd"
    },
    2:{
        "src":"Travel Cream",
        "modal":"assets/img/travel-cream.jpg",
        "website":"http://andren25.github.io/pages/travel-cream/",
        "image":"http://andren25.github.io/assets/img/travel-cream.jpg",
        "file":"http://andren25.github.io/assets/files/travelcream.psd"
    },
    3:{
        "src":"Zenwork",
        "modal":"assets/img/zenwork.jpg",
        "website":"http://andren25.github.io/pages/zenwork/",
        "image":"http://andren25.github.io/assets/img/zenwork.jpg",
        "file":"http://andren25.github.io/assets/files/zenwork.psd"
    },
    4:{
        "src":"Marketing",
        "modal":"assets/img/marketing.jpg",
        "website":"http://andren25.github.io/pages/marketing/",
        "image":"http://andren25.github.io/assets/img/marketing.jpg",
        "file":"http://andren25.github.io/assets/files/FREE makreting landing page.xd"
    },
    5:{
        "src":"Fashion",
        "modal":"assets/img/fashion.jpg",
        "website":"http://andren25.github.io/pages/fashion/",
        "image":"http://andren25.github.io/assets/img/fashion.jpg",
        "file":"http://andren25.github.io/assets/files/Fashion E-commerce Website Home Page PSD.psd"
    },
    6:{
        "src":"Clubin",
        "modal":"assets/img/clubin.jpg",
        "website":"http://andren25.github.io/pages/clubin/",
        "image":"http://andren25.github.io/assets/img/clubin.jpg",
        "file":"http://andren25.github.io/assets/files/Clubin.xd"
    }
};
var p = document.getElementsByClassName('works-posts')[0];
for(var i=0,len=p.children.length;i<len;i++){
    (function(index){
        p.children[i].onclick = function(){
            document.getElementsByClassName('modal')[0].style.display = 'flex';
            document.getElementsByClassName('modal-image-content')[0].src = data[index].modal;
            document.getElementsByClassName('modal-link__website')[0].setAttribute('href',data[index].website);
            document.getElementsByClassName('modal-links__name')[0].innerHTML = data[index].src;
            document.getElementsByClassName('modal-img__website')[0].setAttribute('href',data[index].image);
            document.getElementsByClassName('modal-file__website')[0].setAttribute('href',data[index].file);
        }
    })(i);
}

document.getElementsByClassName('modal-exit')[0].addEventListener('click',()=>{
    document.getElementsByClassName('modal')[0].style.display = 'none';
});
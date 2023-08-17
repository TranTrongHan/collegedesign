window.onscroll=function(){
    var navbar=document.getElementById("subbarId");
    var gototop=document.getElementById("gototop");
    var header=document.getElementById("myheadbar");
    if(document.documentElement.scrollTop>100||document.body.scrollTop>0){
        header.style.position="fixed";
        header.style.opacity="0.7";
        header.style.top="0";
        header.style.right=0;
        header.style.left=0;
        header.style.zIndex=9;
        gototop.style.display="block"
    }   
    else{
        header.style.position="relative"
        gototop.style.display="none "
        header.style.opacity="unset";
    }
}


function goToTop(){
    var timer=setInterval(function(){
        document.documentElement.scrollTop-=20;
        if(document.documentElement.scrollTop<=0){
               clearInterval(timer);
        }
    },1);
}


    
function eventHandler(){
    let optionBtn = document.querySelector('.more-icon');
    let mobileNavList = document.querySelector('.mobile-nav-list');
    let navListItems = document.querySelectorAll('.nav-list-item');
    
    

    optionBtn.onclick = function(){
        if(mobileNavList.classList.contains('hidden')) {
            mobileNavList.classList.remove('hidden');
        }
        else {
            mobileNavList.classList.add('hidden');
        }
    }

    for(let i = 0; i< navListItems.length; i++) {
        let btn = navListItems[i].querySelector('.sub-nav-btn');
        let navListContent = navListItems[i].querySelector('.nav-list-content');
        console.log(navListContent)
        btn.onclick=function(){
            if(navListContent.classList.contains('hidden')) {
                navListContent.classList.remove('hidden');
            }
            else{
                navListContent.classList.add('hidden');
            }
        }
    }

}
eventHandler();

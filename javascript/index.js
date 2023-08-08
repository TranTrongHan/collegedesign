window.onscroll=function(){
    var navbar=document.getElementById("subbarId");
    var gototop=document.getElementById("gototop");
    var header=document.getElementById("myheadbar");
    console.log(header)
    if(document.documentElement.scrollTop>100||document.body.scrollTop>0){
        header.style.position="fixed";
        header.style.top="0";
        header.style.right=0;
        header.style.left=0;
        header.style.zIndex=9;
        gototop.style.display="block"
    }   
    else{
        header.style.position="relative"
        gototop.style.display="none "
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
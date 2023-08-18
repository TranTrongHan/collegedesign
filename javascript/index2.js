var form=document.getElementById('myForm');
var submitBtn=document.querySelector('.submitBtn');
var email=document.getElementById('email').value;
var closeBtn = document.getElementsByClassName('close')[0];
form.addEventListener('submit',function(event){
    event.preventDefault();
    if(email===''){
        let modalContainer=document.querySelector('.modal-container')
        let modal=document.querySelector('.modal-error');
        modal.classList.remove('hidden');
        modalContainer.style.top='100px'
    }
})
closeBtn.addEventListener('click',function(){
    
    let modal=document.querySelector('.modal-error');
    modal.classList.add('hidden');
}) 


function  eventHandler(){
    let iTems=document.querySelectorAll('.info-item');
   
   
    for(let i=0;i<iTems.length;i++){
        let moreBtn=iTems[i].querySelector('.more');
        let inFo=iTems[i].querySelector('.more-info-content');
        let showBtn=iTems[i].querySelector('.more-info-button');
        let hideBtn=iTems[i].querySelector('.hide-button');
        moreBtn.onclick=function(){
            inFo.classList.remove('hidden');
            showBtn.classList.add('hidden');
            hideBtn.classList.remove('hidden');
        }
        hideBtn.onclick=function(){
            inFo.classList.add('hidden');
            showBtn.classList.remove('hidden');
            hideBtn.classList.add('hidden');
        }
    }
    
}


eventHandler()


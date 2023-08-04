let submitBtn = document.querySelector('.submit-btn');
// console.log(submitBtn)
submitBtn.onclick = function() {
    showmodalForm();
}

function showmodalForm(){
   var mail=document.querySelector("#email").value;
   if (mail === '') {
        let model = document.querySelector('.modal-error-container')
        model.classList.remove('display');
    }
    else if(mail!==''){
        let model=document.querySelector('.modal-succes-container')
        model.classList.remove('display');
    }
}

let tag=document.querySelector('.close-tag');
tag.onclick=function(){
    let model = document.querySelector('.modal-error-container')
    model.classList.add('display');
}

let tag2=document.querySelector('.close-tag-2')
console.log(tag2);
tag2.onclick=function(){
    let model = document.querySelector('.modal-succes-container')
    model.classList.add('display');
}

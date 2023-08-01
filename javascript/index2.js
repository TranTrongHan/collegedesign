let submitBtn = document.querySelector('.submit-btn');
// console.log(submitBtn)
submitBtn.onclick = function() {
    showmodalForm();
}

function showmodalForm(){
   var mail=document.querySelector("#email").value;
   if (mail === '') {
        let model = document.querySelector('.modal-container')
        model.classList.remove('display');
    }
}

let tag=document.querySelector('.close-tag');
let clickOutSide=document.querySelector('.form-container');
tag.onclick=function(){
    let model = document.querySelector('.modal-container')
    model.classList.add('display');
}



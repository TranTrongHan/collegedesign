let submitBtn = document.querySelector('.submitBtn');
console.log(submitBtn);
submitBtn.onclick = function() {
    showmodalForm();
}

function showmodalForm(){
    var mail=document.querySelector('#email').value;
    if (mail == '') {
        let modal = document.querySelector('.modal-error')
        modal.classList.remove('hidden');
    }
}



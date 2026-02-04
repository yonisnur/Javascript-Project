var pass = document.querySelector('.password')
var msg = document.querySelector('.msg')
var strenth = document.querySelector('.str')


pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = 'block'
    }
    else {
        msg.style.display = 'none'
    }

    if(pass.value.length < 4){
        strenth.innerHTML= 'weak'
        msg.style.color = 'rgba(236, 43, 17, 1)'
    }
    else if(pass.value.length < 8){
        strenth.innerHTML = 'medium'
        msg.style.color = 'rgba(245, 231, 44, 1)'
    }
    else if (pass.value.length >= 8){
        strenth.innerHTML = 'strong'
        msg.style.color = 'rgb(19, 245, 19)'
    }
})
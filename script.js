const form = document.getElementById('contact-form');

const sMessage = document.getElementById('success-message')



form.addEventListener('submit',(e)=> {
    e.preventDefault()
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('first-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;
    const formAlert =document.querySelectorAll('.form-alert');


    let validetion=true;
    // firstName
    if(firstName===''){
        validetion=false;
        document.querySelector('#first-name + .form-alert').style.display = 'block';
    }
    else{
        document.querySelector('#first-name + .form-alert').style.display = "none";
    }
    // lastName
    if(lastName===''){
        validetion=false
        document.querySelector('#last-name + .form-alert').style.display = "block";
    }
    else{
        document.querySelector('#last-name + .form-alert').style.display = "none";
    }
    // email validetion
    if(!validEmail(email)){
        validetion=false;
        document.querySelector('#email + .form-alert').style.display = "block";
    }
    else{
        document.querySelector('#email + .form-alert').style.display = "none";
    }
    // query
    if(!queryType){
        validetion=false
        document.querySelector('.radio-inputs + .form-alert').style.display = "block";
    }
    else{
        document.querySelector('.radio-inputs + .form-alert').style.display = "none";
    }
    if(message ===''){
        document.querySelector('#message + .form-alert').style.display = "block";
    }
    else{
        document.querySelector('#message + .form-alert').style.display = "none";
    }

    if(!consent){
        formAlert[5].classList.add('form-error')
    }
    else{
        formAlert[5].classList.remove('form-error')
    }
    if(validetion){
        sMessage.classList.add('active')
        form.reset()
    }

})

function validEmail(email){
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailValidation.test(email)
}
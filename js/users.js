window.addEventListener('load',()=>{


    //variables
    const newUserForm = document.getElementById('new-user-form');
    const name = document.getElementById('name');
    const rol = document.getElementById('rol');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const password2 = document.getElementById('repPassword');
   


    // console.log('nodo de formulario',newUserForm);
    // objectValidator = {
    //     emptyField:'',
    //     email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,      
    
    // }


    //funciones
    //TODO: Crear una función que valide que el campo no está vacío
    //TODO: Crear una función que valide que el mail es un mail válido
    //TODO: Crear una función que valide que la contraseña tenga como mínimo 3 caracteres y un máximo de 255
    //TODO: name solo pueden ser letras
    //TODO: username y password solo puede ser números y letras
    

    // const sendData = (e) =>{
    //     e.preventDefault();

    //     console.log(e.target[0].value);
    // }

    const fieldEmptyValidator = value => value.length ? true : false;

    const checkInputs = ()=> {
        const nameValue = name.value.trim();
        const rolValue= rol.value.trim();
        const emailValue= email.value.trim();
        const usernameValue=username.value.trim();
        const passwordValue= password.value.trim();
        const password2Value= password2.value.trim();



        // if(usernameValue === '') {
        //     setErrorFor(username, 'Username cannot be blank');
        // } else {
        //     setSuccessFor(username);
        // }
        
        // if(emailValue === '') {
        //     setErrorFor(email, 'Email cannot be blank');
        // } else if (!isEmail(emailValue)) {
        //     setErrorFor(email, 'Not a valid email');
        // } else {
        //     setSuccessFor(email);
        // }
        
        // if(passwordValue === '') {
        //     setErrorFor(password, 'Password cannot be blank');
        // } else {
        //     setSuccessFor(password);
        // }
        
        // if(password2Value === '') {
        //     setErrorFor(password2, 'Password2 cannot be blank');
        // } else if(passwordValue !== password2Value) {
        //     setErrorFor(password2, 'Passwords does not match');
        // } else{
        //     setSuccessFor(password2);
        // }
    }
    
    const  setErrorFor = (input, message) =>{

        // const formControl = input.parentElement;
        // console.log(formControl);
        // const small = formControl.querySelector('small');
        // console.log(small);
        // small.innerText = message;
    }
    
    const   setSuccessFor =  (input) =>{
        const formControl = input.parentElement;
        formControl.className = 'form-element success';
    }
        
    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    //eventos
    newUserForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log(e);

        const arrayInputs = [...e.target];
        arrayInputs.forEach( (input) => {

            //validar campos vacíos
            if(input.type !== 'submit'){
                input.classList.remove('success'); 
                input.classList.add(fieldEmptyValidator(input.value) ?'success':'error');
                const small = document.createElement('small');
                small.classList.add('error-display');
                small.innerText = 'El campo está vació'
                input.parentElement.appendChild(small);
            }
           //validar email
           if(input.type === 'email') {
               input.classList.remove('success');
               console.log(input.value);
               input.classList.add(isEmail(input.value) ?'success':'error')
           }


        });

        // checkInputs();
    });




});
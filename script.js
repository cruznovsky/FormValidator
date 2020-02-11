const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-2');

const showError = (input, message) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}

const showSuccess = (input) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

const isValidEmail = (email) => {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

const checkRequired = (inputArr) => {
   inputArr.forEach((input) => {
      if (input.value.trim() === '') {
         showError(input, `${getFieldName(input)} is required!`);
      } else {
         showSuccess(input);
      }
   });
}

const getFieldName = (input) => {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', (e) => {
   e.preventDefault();

   checkRequired([username, email, password, password2]);
})
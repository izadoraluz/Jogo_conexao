// Essa página JavaScript foi feita baseada em: https://www.youtube.com/watch?v=R_MutcGu_xE&t=1s
const formContainer = document.querySelector('.form-container');
const salvarForm = document.querySelector('#player-one-form');
const continuarForm = document.querySelector('#player-two-form');

const switchForm = (form) => {
  if(form == 'playertwo'){
    if(window.innerWidth > 800){
      formContainer.style.left = '50%';
    }
    salvarForm.style.marginLeft = '-150%';
    continuarForm.style.marginLeft = '-100%'
    formContainer.style.background = "#ff0000";

  } else {
      if(window.innerWidth > 800){
        formContainer.style.left = '0%';
      }
      salvarForm.style.marginLeft = '0%';
      continuarForm.style.marginLeft = '50%'
      formContainer.style.background = "#49ece2";
    }
}

// Obtenha o elemento que deseja modificar


// Altere o valor de uma propriedade CSS


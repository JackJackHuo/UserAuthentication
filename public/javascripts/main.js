const form = document.querySelector('FORM')
const btn = document.querySelector('BUTTON')


form.addEventListener('submit' , function onFormSubmit(e){
  if(!form.checkValidity()){
    e.preventDefault()
    e.stopPropagation()
  }
})

btn.addEventListener('click' , function onBtnSubmit(e){
  form.classList.add('isValidated')
})
const formElem = document.getElementById('form')

formElem.addEventListener('submit', (event) => {
  event.preventDefault()

  let error = formValidate()

  if (error === 0) {
    const errors = document.querySelectorAll('.error')
    errors.forEach((er) => {
      er.classList.remove('isActive')
    })
    console.log('Выполнено')
  } else {
    let listErrors = document.querySelectorAll('.js-input-error')
    const errors = document.querySelectorAll('.error')
    errors.forEach((er) => {
      er.classList.remove('isActive')
    })

    for (let i = 0; i < listErrors.length; i++) {
      if (listErrors[i].name === 'email') {
        const validate = document.querySelector('.error-email-or-login')
        validate.classList.add('isActive')
      } else if (listErrors[i].name === 'control-str') {
        const validate = document.querySelector('.error-control-str')
        validate.classList.add('isActive')
      } else if (listErrors[i].type === 'password') {
        const validate = document.querySelectorAll('.error-password')
        validate.forEach((er) => {
          er.classList.add('isActive')
        })
      }
    }
    return
  }
})

function formValidate() {
  let error = 0

  let formRequiredInpute = document.querySelectorAll('.js-input')
  let formRequiredPassword = document.querySelectorAll('.js-input-password')

  formRequiredInpute.forEach((input) => {
    formRemoveError.call(input)

    if (input.value === '') {
      formAddError.call(input)
      error++
    }
  })

  formRequiredPassword.forEach((input) => {
    formRemoveError.call(input)

    const password = document.getElementById('new-password')
    const confirmPassword = document.getElementById('confirm-password')
    if (input.value === '') {
      formAddError.call(input)
      error++
    } else if (password.value !== confirmPassword.value) {
      formAddError.call(input)
      error++
    }
  })

  return error
}

function formRemoveError() {
  this.classList.remove('js-input-error')
}

function formAddError() {
  this.classList.add('js-input-error')
}

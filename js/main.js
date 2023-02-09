const [form, inputOne, inputTwo, positiveAnswer, negativeAnswer] = [
  'form',
  'string_one',
  'string_two',
  'positive_answer',
  'negative_answer',
].map((id) => document.getElementById(id))

function isAnagram() {
  if (inputOne.length !== inputTwo.length) {
    return negativeAnswer.classList.add('answer_visible')
  }

  return Array.from(inputOne.value.toLowerCase()).sort().join('') ===
    Array.from(inputTwo.value.toLowerCase()).sort().join('')
    ? positiveAnswer.classList.add('answer_visible')
    : negativeAnswer.classList.add('answer_visible')
}

function focusHandler(event) {
  event.target.classList.remove('error')
  event.target.value = ''

  if (
    positiveAnswer.classList.contains('answer_visible') ||
    negativeAnswer.classList.contains('answer_visible')
  ) {
    inputOne.value = ''
    inputTwo.value = ''
  }

  positiveAnswer.classList.remove('answer_visible')
  negativeAnswer.classList.remove('answer_visible')
}

;[inputOne, inputTwo].forEach((input) =>
  input.addEventListener('focus', focusHandler)
)

function showError() {
  !inputOne.value && inputOne.classList.add('error')
  !inputTwo.value && inputTwo.classList.add('error')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  ;[inputOne, inputTwo].forEach((input) => input.blur())
  inputOne.value && inputTwo.value ? isAnagram() : showError()
})

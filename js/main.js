const [stringOne, stringTwo, checkButton, positiveAnswer, negativeAnswer] = [
  'string_one',
  'string_two',
  'check_button',
  'positive_answer',
  'negative_answer',
].map((id) => document.getElementById(id))

function isAnagram() {
  if (stringOne.length !== stringTwo.length) {
    return negativeAnswer.classList.add('answer_visible')
  }

  return Array.from(stringOne.value.toLowerCase()).sort().join('') ===
    Array.from(stringTwo.value.toLowerCase()).sort().join('')
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
    stringOne.value = ''
    stringTwo.value = ''
  }

  positiveAnswer.classList.remove('answer_visible')
  negativeAnswer.classList.remove('answer_visible')
}

;[stringOne, stringTwo].forEach((item) =>
  item.addEventListener('focus', focusHandler)
)

function showError() {
  !stringOne.value && stringOne.classList.add('error')
  !stringTwo.value && stringTwo.classList.add('error')
}

checkButton.addEventListener('click', () => {
  stringOne.value && stringTwo.value ? isAnagram() : showError()
})

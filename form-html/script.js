const form = document.querySelector('.form')
const inputs = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const phone = document.querySelector('#phone')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  nameValidate();
})

function setError(index) {
  spans[index].style.display = 'block';
}

function takeError(index) {
  spans[index].style.display = 'none';
}

function nameValidate() {
  const name = inputs[0].value;

  if(name.length !== 0 & name.length < 5) setError(0);
  else takeError(0);
}

phone.addEventListener('keypress', () => {
  let length = phone.value.length + 1

  if(length === 1) phone.value += '(';
  if(length === 4) phone.value += ')';
  if(length === 10) phone.value += '-';

})
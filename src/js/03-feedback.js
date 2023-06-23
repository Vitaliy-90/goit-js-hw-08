import throttle from 'lodash.throttle';

const KEY_FORM = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const submitButton = document.querySelector('button');

const formSave = JSON.parse(localStorage.getItem(KEY_FORM));
if (formSave) {
  input.value = formSave.input;
  textarea.value = formSave.textarea;
  submitButton.disabled = !(input.value && textarea.value);
}

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      KEY_FORM,
      JSON.stringify({
        input: input.value,
        textarea: textarea.value,
      })
    );
    submitButton.disabled = !(input.value && textarea.value);
  }, 500)
);
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({
    input: input.value,
    textarea: textarea.value,
  });
  form.reset();
  localStorage.removeItem(KEY_FORM);
  submitButton.disabled = true;
});

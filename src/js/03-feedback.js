import throttle from 'lodash.throttle';

const KEY_FORM = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

// const formData = {};

const formSave = JSON.parse(localStorage.getItem(KEY_FORM));
if (formSave) {
  refs.input.value = formSave.input;
  refs.textarea.value = formSave.textarea;
}

refs.form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      KEY_FORM,
      JSON.stringify({
        input: refs.input.value,
        textarea: refs.textarea.value,
      })
    );
  }, 500)
);
refs.form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({
    input: refs.input.value,
    textarea: refs.textarea.value,
  });
  if (refs.input.value === '' || refs.textarea.value === '') {
    return false;
  }
  refs.form.reset();
  localStorage.removeItem(KEY_FORM);
});

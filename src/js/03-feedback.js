import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
let feedback = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

loadSavedMessage();

function onFormInput(event) {
  feedback[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (feedback.email && feedback.message) {
    console.log(feedback);
    feedback = {};
    event.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  } else {
    alert('Please, fill all fields');
  }
}

function loadSavedMessage() {
  const savedFeedback = localStorage.getItem(LOCALSTORAGE_KEY);
  if (!savedFeedback) {
    return;
  }

  // upload value to form
  feedback = JSON.parse(savedFeedback);
  if (feedback.email) {
    refs.email.value = feedback.email;
  }
  if (feedback.message) {
    refs.message.value = feedback.message;
  }
}

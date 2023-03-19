import {validate} from './validation.js';
import {isEnterKey, isEscapeKey} from './utils.js';

const uploadButton = document.querySelector('#upload-file');
const modalPopup = document.querySelector('.img-upload__overlay');
const closePopup = document.querySelector('#upload-cancel');
const hashtagInput = modalPopup.querySelector('[name="hashtags"]');
const commentInput = modalPopup.querySelector('[name="description"]');
const uploadForm = document.querySelector('#upload-select-image');
const submitButton = document.querySelector('.img-upload__submit');

const disableEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onInputsFocus = (evt) => {
  evt.target.addEventListener('keydown', disableEsc);
};

const onInputsBlur = (evt) => {
  evt.target.removeEventListener('keydown', disableEsc);
};

const clearInputs = () => {
  uploadButton.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
};

const hidePopup = () => {
  modalPopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  deleteListeners();
  clearInputs();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePopup();
  }
};

const onButtonCloseClick = () => {
  hidePopup();
};

const onButtonCloseEnter = (evt) => {
  if (isEnterKey(evt)) {
    hidePopup();
  }
};

const addListeners = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  closePopup.addEventListener('click', onButtonCloseClick);
  closePopup.addEventListener('keydown', onButtonCloseEnter);
  hashtagInput.addEventListener('focus', onInputsFocus);
  hashtagInput.addEventListener('blur', onInputsBlur);
  commentInput.addEventListener('focus', onInputsFocus);
  commentInput.addEventListener('blur', onInputsBlur);
};

function deleteListeners() {
  document.removeEventListener('keydown', onDocumentKeydown);
  closePopup.removeEventListener('click', onButtonCloseClick);
  closePopup.removeEventListener('keydown', onButtonCloseEnter);
  hashtagInput.removeEventListener('focus', onInputsFocus);
  hashtagInput.removeEventListener('blur', onInputsBlur);
  commentInput.removeEventListener('focus', onInputsFocus);
  commentInput.removeEventListener('blur', onInputsBlur);
}

const disabledSubmitButton = (status) => {
  submitButton.disabled = status;
};

const showPopup = () => {
  modalPopup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addListeners();
};

const submitForm = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    validate();
    disabledSubmitButton(true);
  });
};

uploadButton.addEventListener('change', () => {
  showPopup();
});

submitForm();

import {validate, reset} from './validation.js';
import {isEnterKey, isEscapeKey, showAlert} from './utils.js';
import {initScale, resetScale} from './scale.js';
import {initSlider, resetSlider} from './slider.js';
import {sendData} from './api.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const uploadButton = document.querySelector('#upload-file');
const modalPopup = document.querySelector('.img-upload__overlay');
const closePopup = document.querySelector('#upload-cancel');
const uploadForm = document.querySelector('#upload-select-image');
const hashtagInput = uploadForm.querySelector('[name="hashtags"]');
const commentInput = uploadForm.querySelector('[name="description"]');
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

export const hidePopup = () => {
  modalPopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetScale();
  resetSlider();
  deleteListeners();
  clearInputs();
  reset();
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

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};


const showPopup = () => {
  modalPopup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addListeners();
  initScale();
  initSlider();
};

export const initFormUpload = (startValidator, onSuccess) => {
  startValidator();
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = validate();
    if(isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(
          (err) => {
            showAlert(err.message);
          }
        )
        .finally(unblockSubmitButton);
    }
  });
  uploadButton.addEventListener('change', () => {
    showPopup();
  });
};

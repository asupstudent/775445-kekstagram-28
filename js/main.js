import {getData} from './api.js';
import {initGallery} from './gallery.js';
import {hidePopup, initFormUpload} from './form-upload.js';
import {debounce, showAlert} from './utils.js';
import {initValidation} from './validation.js';
import {changeFilter, showFilter} from './filter.js';
import {setState, getState} from './state.js';

const RENDER_DELAY = 500;

getData()
  .then((photos) => {
    setState(photos);
  })
  .then(() => {
    initGallery(getState());
    changeFilter(debounce(
      () => initGallery(getState()),
      RENDER_DELAY,
    ));
  })
  .then(
    () => {
      showFilter();
    }
  )
  .catch((err) => {
    showAlert(err.message);
  });

initFormUpload(initValidation, hidePopup);

import {getData} from './api.js';
import {initGallery} from './gallery.js';
import {initFormUpload, hidePopup} from './form-upload.js';

getData(
  initGallery
);

initFormUpload(hidePopup);

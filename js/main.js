import {getData} from './api.js';
import {initGallery} from './gallery.js';
import {initFormUpload} from './form-upload.js';

getData(
  (items) => {
    initGallery(items);
  }
);

initFormUpload();

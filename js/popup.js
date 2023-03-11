import {renderItemDetails, clearItemDetails} from './big-items.js';

const itemDialog = document.querySelector('.big-picture');

export const showPopup = (itemData) => {
  itemDialog.classList.remove('hidden');
  renderItemDetails(itemData, itemDialog);
  clearItemDetails();
};
